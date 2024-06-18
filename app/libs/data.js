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
  const ITEM_PER_PAGE = 5;
  const filter = {};

  if (q && mongoose.Types.ObjectId.isValid(q)) {
    filter.materialId = q;
  }

  try {
    await connectToDB();
    console.log("Connected to DB");

    const count = await Transaction.find(filter).countDocuments();
    console.log("Count of transactions:", count);
    const transactions = await Transaction.find(filter)
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .populate('materialId')  // Assuming materialId and userId are references
      .populate('userId');

    console.log("Fetched transactions:", transactions);

    return { count, transactions };
  } catch (err) {
    console.error("Error fetching transactions:", err);
    throw new Error("failed to fetch transactions!");
  }
};
//single transaction
export const fetchTransaction = async (id) => {
  await connectToDB();
  const transaction = await Transaction.findById(id)
    .populate("materialId")
    .populate("userId")
    .exec();
  
  if (transaction) {
    transaction._id = transaction._id.toString();
    if (transaction.materialId) {
      transaction.materialId._id = transaction.materialId._id.toString();
    }
    if (transaction.userId) {
      transaction.userId._id = transaction.userId._id.toString();
    }
  }
  
  return transaction;
};

export const fetchMaterialsAndUsers = async () => {
  await connectToDB();

  const [materials, users] = await Promise.all([
    Material.find().exec(),
    User.find().exec()
  ]);

  return { materials, users };
};

// ... other imports and functions
export const fetchAllTransactionSummary = async () => {
  await connectToDB();

  const transactions = await Transaction.find({});

  const summary = transactions.reduce((acc, transaction) => {
    const day = new Date(transaction.date).toLocaleDateString("fr-FR", { weekday: "long" });
    if (!acc[day]) {
      acc[day] = { sortie: 0, retour: 0 };
    }
    if (transaction.type === "out") {
      acc[day].sortie += transaction.quantity;
    } else if (transaction.type === "in") {
      acc[day].retour += transaction.quantity;
    }
    return acc;
  }, {});

  return summary;
};

//manisa materiel
export const fetchTotalMaterialsCount = async () => {
  try {
    await connectToDB();
    const count = await Material.countDocuments();
    return count;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch total materials count!");
  }
};
//manisa user
export const fetchTotalUsersCount = async () => {
  try {
    await connectToDB();
    const count = await User.countDocuments();
    return count;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch total materials count!");
  }
};
//manisa transaction
export const fetchTotaltransactionsCount = async () => {
  try {
    await connectToDB();
    const count = await Transaction.countDocuments();
    return count;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch total materials count!");
  }
};