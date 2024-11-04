import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStrore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    console.log(posts);
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch the post!");
  }
};
export const getUser = async (id) => {
  noStrore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
