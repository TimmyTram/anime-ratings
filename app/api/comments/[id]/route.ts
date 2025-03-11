import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { Role } from "@prisma/client";

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const session = await getServerSession(authOptions);

    if(!session || session.user.role !== Role.ADMIN) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { id } = await params;

        const comment = await prisma.comment.findUnique({
            where: {
                id: id
            }
        });

        if(!comment) {
            return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
        }

        await prisma.comment.delete({
            where: {
                id: id
            }
        });

        return NextResponse.json({ message: 'Comment deleted' }, { status : 200 });
    } catch (error : any) {
        console.log(`[INFO]: Error in DELETE /api/comments/[id]/route.ts: ${error.message}`);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

}