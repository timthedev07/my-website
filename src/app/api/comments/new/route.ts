import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { newComment } from "../../../../mongodb/functions/newComment";
import type { BlogFormData } from "../../../../components/CommentForm";
import { authOptions } from "../../../../lib/auth";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return new NextResponse("Please sign in to continue", { status: 401 });
  }

  try {
    const formData = (await request.json()) as BlogFormData;
    formData.commenterName = formData.commenterName.split(" ")[0];
    await newComment(formData);
    return new NextResponse(null, { status: 201 });
  } catch (error) {
    const status = typeof error === "number" ? error : 503;
    return new NextResponse(null, { status });
  }
}
