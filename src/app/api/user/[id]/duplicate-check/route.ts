import { isLoginIdDuplicate } from "@/lib/server/user";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const isDuplicated = await isLoginIdDuplicate({ loginId: id });

    return NextResponse.json(isDuplicated, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/user/[Id]: ", error);

    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
