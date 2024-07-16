"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  // ?truck number, userId, item_category, name ,address
  // ? contact, status, lastUpdate, image_link

  const { name, address, slug, userId, contact, item_category, } = Object.fromEntries(formData);

  try {
    connectToDb();

    const newPost = new Post({
      name,
      address,
      slug,
      userId,
      contact,
      item_category
    });

    await newPost.save();
    console.log("saved post to db");
    revalidatePath("/deliveries");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Post.findByIdAndUpdate(
      id,
      { status: 'canceled' },
      { new: true }
    );

    // await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/branch");
    revalidatePath("/admin");

  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};



export const addUser = async (prevState, formDataValues) => {

  const { username, name, password, city, contact, incorporate, } = Object.fromEntries(formDataValues);

  try {
    await connectToDb();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      name,
      city,
      contact,
      branchName: username + 'FC',
      incorporate,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const handleLogout = async () => {
  "use server";
  await signOut();
};

// export const register = async (previousState, formData) => {
//   const { username, email, password, img, passwordRepeat } =
//     Object.fromEntries(formData);

//   if (password !== passwordRepeat) {
//     return { error: "Passwords do not match" };
//   }

//   try {
//     connectToDb();

//     const user = await User.findOne({ username });

//     if (user) {
//       return { error: "Username already exists" };
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//       img,
//     });

//     await newUser.save();
//     console.log("saved to db");

//     return { success: true };
//   } catch (err) {
//     console.log(err);
//     return { error: "Something went wrong!" };
//   }
// };

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
