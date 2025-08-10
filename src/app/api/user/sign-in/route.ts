import { signInUser } from "@/lib/server/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const signedUser = await signInUser({
      loginId: body.loginId,
      inputPassword: body.password,
    });
    return new Response(JSON.stringify(signedUser));
  } catch (error) {
    console.error("Error in POST /api/use/sign-in: ", error);

    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
