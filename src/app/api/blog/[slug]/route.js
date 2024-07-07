import { Post } from "@/lib/models";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    connectDB();

    const post = await Post.findOne({ slug });

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Failed to fetch post." });
    throw new Error("Failed to fetch posts.");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;

  try {
    connectDB();

    await Post.deleteOne({ slug });

    return NextResponse.json("post deleted");
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Failed to delete post." });
    throw new Error("Failed to fetch posts.");
  }
};
