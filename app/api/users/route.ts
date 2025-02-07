import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/prisma";
import { UserData } from "@/types/UserData";
import { checkRequiredArgs } from "@/utils/utils";
import { ArgumentError } from "../../../types/ArgumentError";

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error : any) {
        console.log(`[ERROR]: Error in GET /api/users/route.ts: ${error.message}`);
        return NextResponse.json( { error: "Internal Server Error." }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body: UserData = await req.json();
        
        checkRequiredArgs(body, ["username", "password"]);


        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        });

        return NextResponse.json(user, { status: 201 });
    } catch (error: any) {
        if (error instanceof ArgumentError) {
            console.log(`[ERROR]: Error in POST /api/users/route.ts: ${error.message}`);
            return NextResponse.json( { error: error.message }, { status: 400 });
        }

        console.log(`[ERROR]: Error in POST /api/users/route.ts: ${error.message}`);
        return NextResponse.json( { error: "Internal Server Error." }, { status: 500 });
    }
    
    
    
}