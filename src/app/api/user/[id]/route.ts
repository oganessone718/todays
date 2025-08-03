import { getUserByLoginId } from "@/lib/server/user";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const userData = await getUserByLoginId(id);

    if (!userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/user/[Id]: ", error);

    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
