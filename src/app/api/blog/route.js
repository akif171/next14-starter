import { Post } from "@/lib/models";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectDB();

    const posts = await Post.find();

    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.json({msg:"Failed to fetch posts."})
    throw new Error("Failed to fetch posts.");
  }
};
