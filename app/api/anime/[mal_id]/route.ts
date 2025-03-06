import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { CommentData } from "@/app/types/CommentData";
import { checkRequiredArgsFilled } from "@/app/utils/utils";

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
        console.log(`[ERROR]: Error in POST /api/anime/[id]/route.ts: ${error.message}`);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


// route to get comments for this anime post
export async function GET(_req: NextRequest, { params }: { params: Promise<{ mal_id: string }> }) {
    try {
        const { mal_id } = await params;
        
        console.log(`[BACKEND]: Fetching comments for anime post with mal_id: ${mal_id}`);

        // check if anime post exists
        const animePost = await prisma.animePost.findUnique({
            where: {
                mal_id
            },
            include: {
                comments: {
                    include: {
                        user: true
                    }
                }
            }
        });

        // if anime post doesn't exist, it just means it probably hasn't been created.
        // *Anime posted is created when a comment is made on it*
        // normally this would return 404 with an error message, but we'll just return an empty array
        if (!animePost) {
            return NextResponse.json([]);
        }

        return NextResponse.json(animePost.comments);
    } catch (error: any) {
        console.log(`[ERROR]: Error in GET /api/anime/[id]/route.ts: ${error.message}`);
        return NextResponse.json({ error: error.message }, { status: 500 }); 
    }
};