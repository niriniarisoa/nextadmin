import { Material, User } from "./models";
import { connectToDB } from "./utils";

export const fecthUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;
  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch users!");
  }
};

export const fecthUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch users!");
  }
};


export const fetchMaterials = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;
  try {
    connectToDB();
    const count = await Material.find({ title: { $regex: regex } }).count();
    const materials = await Material.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, materials };
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch materials!");
  }
};

export const fetchMaterial = async (id) => {
  try {
    connectToDB();
    const Material = await User.findById(id);
    return Material;
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch Material!");
  }
};