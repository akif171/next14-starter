import { unstable_noStore as noStore } from "next/cache";

import { Post, User } from "./models";
import { connectDB } from "./utils";

export const getPosts = async () => {
  try {
    connectDB();

    const posts = await Post.find();

    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts.");
  }
};

export const getSinglePost = async (slug) => {
  try {
    connectDB();

    const post = await Post.findOne({ slug });

    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post.");
  }
};

export const getUser = async (id) => {
  noStore()
  
  try {
    connectDB();

    const user = await User.findById(id);

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user.");
  }
};

export const getAllUser = async () => {
  try {
    connectDB();

    const users = await User.find();

    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users.");
  }
};
