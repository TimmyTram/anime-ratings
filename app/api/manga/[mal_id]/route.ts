import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { CommentData } from "@/app/types/CommentData";
import { checkRequiredArgsFilled } from "@/app/utils/utils";
import { COMMENT_MAX_LENGTH, MAX_FETCH_COMMENT_LIMIT } from "@/app/utils/constants";

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest, { params }: { params: Promise<{ mal_id: string }> }) {
    const session = await getServerSession(authOptions);

    // protect route
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { mal_id } = await params;
        const body: CommentData = await req.json();

        checkRequiredArgsFilled(body, ["text"]);

        // check if manga post exists
        const mangaPost = await prisma.mangaPost.findUnique({
            where: {
                mal_id
            }
        });

        if (body.text.length > COMMENT_MAX_LENGTH) {
            return NextResponse.json({ error: `Comment is too long | Over by: ${body.text.length - COMMENT_MAX_LENGTH} charcters.` }, { status: 400 });
        }

        // If manga post doesn't exist, create it
        if (!mangaPost) {
            await prisma.mangaPost.create({
                data: {
                    mal_id
                }
            });
        }

        // Create the comment
        const comment = await prisma.comment.create({
            data: {
                text: body.text,
                user: {
                    connect: {
                        id: session.user.id
                    }
                },
                mangaPost: {
                    connect: {
                        mal_id
                    }
                }
            }
        });

        return NextResponse.json(comment, { status: 201 });
    } catch (error: any) {
        console.log(`[ERROR]: Error in POST /api/manga/[mal_id]/route.ts: ${error.message}`);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
};

// route to get comments for this manga post
export async function GET(req: NextRequest, { params }: { params: Promise<{ mal_id: string }> }) {
    try {
        const { mal_id } = await params;

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1');
        let limit = parseInt(searchParams.get('limit') || '10');

        if (page < 1 || limit < 1) {
            return NextResponse.json({ error: "Invalid page or limit" }, { status: 400 });
        }

        limit = Math.min(MAX_FETCH_COMMENT_LIMIT, limit);

        const skip = (page - 1) * limit;

        // check if manga post exists
        const mangaPost = await prisma.mangaPost.findUnique({
            where: {
                mal_id
            },
            include: {
                comments: {
                    skip,
                    take: limit,
                    include: {
                        user: {
                            select: {
                                username: true,
                                role: true
                            }
                        }
                    }
                }
            }
        });

        // if manga post doesn't exist, it just means it probably hasn't been created.
        // *Manga post is created when a comment is made on it*
        // normally this would return 404 with an error message, but we'll just return an empty array
        if (!mangaPost) {
            return NextResponse.json({
                pagination: {
                    currentPage: page,
                    totalPages: 1,
                    totalComments: 0
                },
                comments: []
            });
        }

        const totalComments = await prisma.comment.count({
            where: {
                mangaPost: {
                    mal_id
                }
            }
        });

        return NextResponse.json({
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(totalComments / limit),
                totalComments
            },
            comments: mangaPost.comments
        });
    } catch (error: any) {
        console.log(`[ERROR]: Error in GET /api/manga/[mal_id]/route.ts: ${error.message}`);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

    }
}