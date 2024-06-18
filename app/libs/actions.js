"use server";
import { redirect } from "next/navigation";
import { Material, Transaction, User } from "./models";
import { connectToDB } from "./utils";
import { revalidatePath } from "next/cache";



export const addUser = async (formData) => {
  const {
    username,
    email,
    phone,
    titre,
    status,
    adresse,
    departement,
  } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      phone,
      titre,
      status,
      adresse,
      departement,
    });
    
    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Echec de la creation!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
//update user
export const updateUser = async (formData) => {
  const {
    id,
    username,
    email,
    phone,
    titre,
    status,
    adresse,
    departement,
  } = Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
    username,
    email,
    phone,
    titre,
    status,
    adresse,
    departement,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
 
    await User.findByIdAndUpdate(id , updateFields); 
  } catch (err) {
    console.log(err);
    throw new Error("Echec de la modification!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
//ajout materiel
export const addmaterial = async (formData) => {
  const {
    title,
    cat,
    depart,
    stat,
    location,
  } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newmaterial = new Material({
      title,
      cat,
      depart,
      stat,
      location,
    });
    

    console.log(newmaterial);
    await newmaterial.save();
  } catch (err) {
    console.log(err);
    throw new Error("Echec de la creation!");
  }

  revalidatePath("/dashboard/");
  redirect("/dashboard/materiel");
};

//update materiel
export const updateMateriel = async (formData) => {
  const {
    id,
    title,
    cat,
    depart,
    stat,
    location,
  } = Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      cat,
      depart,
      stat,
      location,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
 
    await Material.findByIdAndUpdate(id , updateFields); 
  } catch (err) {
    console.log(err);
    throw new Error("Echec de la modification!");
  }

  revalidatePath("/dashboard/materiel");
  redirect("/dashboard/materiel");
};

//Delete materiel
export const deletematerial = async (formData) => {
  const {
   id
  } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Material.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Echec de la supression!");
  }

  revalidatePath("/dashboard/"); 
};
export const deleteUser = async (formData) => {
  const {
   id
  } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Echec de la supression!");
  }

  revalidatePath("/dashboard/"); 
};
//ajout transaction
export const addTransaction = async (formData) => {
  const {
    materialId,
    userId,
    type,
    quantity,
  } = Object.fromEntries(formData);

  try {
    await connectToDB();
    const newTransaction = new Transaction({
      materialId,
      userId,
      type,
      quantity,
    });

    await newTransaction.save();
  } catch (err) {
    console.log(err);
    throw new Error("Echec de la creation de la transaction!");
  }

  revalidatePath("/dashboard/transaction");
  redirect("/dashboard/transaction");
};
//update transaction
export const updateTransaction = async (formData) => {
  const {
    id,
    materialId,
    userId,
    type,
    quantity,
  } = Object.fromEntries(formData);

  try {
    await connectToDB();

    const updateFields = {
      materialId,
      userId,
      type,
      quantity,
    };

    Object.keys(updateFields).forEach(
      (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Transaction.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Echec de la modification de la transaction!");
  }

  revalidatePath("/dashboard/transaction");
  redirect("/dashboard/transaction");
};
//delete transaction
export const deleteTransaction = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDB();
    await Transaction.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Echec de la suppression de la transaction!");
  }

  revalidatePath("/dashboard/transaction");
  redirect("/dashboard/transaction");
};