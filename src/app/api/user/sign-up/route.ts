import { createUser } from "@/lib/server/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const createdUser = await createUser({
      loginId: body.loginId,
      inputPassword: body.password,
      nickname: body.nickname,
    });
    return NextResponse.json(createdUser, { status: 200 });
  } catch (error) {
    console.error("Error in POST /api/user: ", error);

    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
