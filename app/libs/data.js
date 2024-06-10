import { Material, User ,Transaction } from "./models";
import { connectToDB } from "./utils";
//afficher tout les utilisateur
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
//fetch signle user
export const fecthUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch user!");
  }
};

//fecth materials
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
//fetch sinle material
export const fetchMaterial = async (id) => {
  try {
    connectToDB();
    const material = await Material.findById(id);
    return material;
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch Material!");
  }
};

//fetch Transaction
export const fetchTransactions = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;
  try {
    connectToDB();
    const count = await Transaction.find({ title: { $regex: regex } }).count();
    const transactions = await Transaction.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, transactions };
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch materials!");
  }
};

export const fetchMaterialsAndUsers = async () => {
  await connectToDB();

  const [materials, users] = await Promise.all([
    Material.find().exec(),
    User.find().exec()
  ]);

  return { materials, users };
};