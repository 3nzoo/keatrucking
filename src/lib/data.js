import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];


export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find().sort({ createdAt: -1 });
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

//? List down all posts
export const getUserPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find().sort({ createdAt: -1 });
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};



//? List down Posts from a Branch/User
export const getBranchPosts = async (username) => {
  try {
    connectToDb();
    const posts = await Post.find({ username: username, status: { $ne: 'canceled' } }).sort({ createdAt: -1 });
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPostBySlug = async (slug) => {
  noStore();
  try {
    const post = await Post.findOne({ slug: slug });
    return post;
    return 'Happy together'
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};


export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne(slug).sort({ createdAt: -1 });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUserBySlug = async (username) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findOne({ username }).select('-password -__v -createdAt -isAdmin');
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find({ isAdmin: false }).select('-password');
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
