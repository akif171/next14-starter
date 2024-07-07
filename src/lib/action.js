"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectDB();

    const newPost = await new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();

    console.log("saved to db");

    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDB();

    await Post.findByIdAndDelete(id);

    console.log("deleted to db");

    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, image } = Object.fromEntries(formData);

  try {
    connectDB();

    const newUser = await new User({
      username,
      email,
      password,
      image,
    });

    await newUser.save();

    console.log("saved to db");

    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDB();

    await Post.deleteMany({ userId: id });

    await User.findByIdAndDelete(id);

    console.log("deleted to db");

    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut("github");
};

export const register = async (prevState, formDara) => {
  const { username, email, password, confirmPassword, image } =
    Object.fromEntries(formDara);

  if (password !== confirmPassword) {
    return { error: "Password does not match" };

    // throw new Error("Password does not match");
  }

  try {
    connectDB();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists." };
      // throw new Error("Password does not match");
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
    });

    await newUser.save();

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "something went wrong" };
  }
};

export const login = async (prevState, formDara) => {
  const { username, password } = Object.fromEntries(formDara);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    if (err?.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password." };
    }
    throw err;
  }
};
