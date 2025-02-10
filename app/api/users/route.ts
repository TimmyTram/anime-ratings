import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/prisma";
import { UserData } from "../../types/UserData";
import { checkRequiredArgsFilled } from "../../utils/utils";
import { ArgumentError } from "../../types/ArgumentError";
import bcrypt from "bcryptjs";

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        const users = await prisma.user.findMany(
            {
                omit: {
                    password: true
                }
            }
        );
        return NextResponse.json(users);
    } catch (error : any) {
        console.log(`[ERROR]: Error in GET /api/users/route.ts: ${error.message}`);
        return NextResponse.json( { error: "Internal Server Error." }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body: UserData = await req.json();
        
        checkRequiredArgsFilled(body, ["username", "password"]);


        const existingUser = await prisma.user.findFirst({
            where: {
                username: body.username
            }
        })

        if (existingUser) {
            return NextResponse.json( { error: "Username already exists." }, { status: 400 });
        }

        if(body.password.length < 6) {
            return NextResponse.json( { error: "Password must be at least 6 characters long." }, { status: 400 });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt);
        
        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: hashedPassword
            }
        });

        return NextResponse.json({ message: `User: ${user.username} was successfully created!`}, { status: 201 });
    } catch (error: any) {
        if (error instanceof ArgumentError) {
            console.log(`[ERROR]: Error in POST /api/users/route.ts: ${error.message}`);
            return NextResponse.json( { error: error.message }, { status: 400 });
        }

        console.log(`[ERROR]: Error in POST /api/users/route.ts: ${error.message}`);
        return NextResponse.json( { error: "Internal Server Error." }, { status: 500 });
    }  
}