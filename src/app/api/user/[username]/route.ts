import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  const { username } = params;

  if (!username) {
    return NextResponse.json(
      { message: "Username is required" },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findUnique({
        where: { username },
        select: {
            username: true,
            rol: true,
            password: true
        },
    });

    if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.error("Prisma error:", error.message);
        return NextResponse.json(
          { message: `Database error: ${error.message}` },
          { status: 500 }
        );
    }
  
    console.error("Unexpected error:", error);
    return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
    );
  }
}