import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { CommentData } from "@/app/types/CommentData";
import { checkRequiredArgsFilled } from "@/app/utils/utils";
import { COMMENT_MAX_LENGTH, MAX_FETCH_COMMENT_LIMIT } from "@/app/utils/constants";

export const dynamic = 'force-dynamic';

// why does nextjs 15 keep changing the way it handles dynamic routes
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

        // Check if anime post exists
        const animePost = await prisma.animePost.findUnique({
            where: {
                mal_id
            }
        });

        if (body.text.length > COMMENT_MAX_LENGTH) {
            return NextResponse.json({ error: `Comment is too long | Over by: ${body.text.length - COMMENT_MAX_LENGTH} charcters.` }, { status: 400 });
        }

        // If anime post doesn't exist, create it
        if (!animePost) {
            await prisma.animePost.create({
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
                animePost: {
                    connect: {
                        mal_id
                    }
                }
            }
        });

        return NextResponse.json(comment, { status: 201 });
    } catch (error: any) {
        console.log(`[ERROR]: Error in POST /api/anime/[mal_id]/route.ts: ${error.message}`);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// route to get comments for this anime post
export async function GET(req: NextRequest, { params }: { params: Promise<{ mal_id: string }> }) {
    try {
        const { mal_id } = await params;

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1');
        let limit = parseInt(searchParams.get('limit') || '10');

        if(page < 1 || limit < 1) {
            return NextResponse.json({ error: "Invalid page or limit" }, { status: 400 });
        }

        // limit the amount of comments that can be fetched
        limit = Math.min(MAX_FETCH_COMMENT_LIMIT, limit);

        // how many entries to skip over
        const skip = (page - 1) * limit;
        
        // check if anime post exists
        const animePost = await prisma.animePost.findUnique({
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

        // if anime post doesn't exist, it just means it probably hasn't been created.
        // *Anime post is created when a comment is made on it*
        // normally this would return 404 with an error message, but we'll just return an empty array
        if (!animePost) {
            return NextResponse.json({
                pagination: {
                    currentPage: page,
                    totalPages: 0,
                    totalComments: 0
                },
                comments: []
            });
        }

        const totalComments = await prisma.comment.count({
            where: {
                animePost: {
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
            comments: animePost.comments
        });
    } catch (error: any) {
        console.log(`[ERROR]: Error in GET /api/anime/[mal_id]/route.ts: ${error.message}`);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 }); 
    }
};