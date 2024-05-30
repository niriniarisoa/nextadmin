"use server";
import { redirect } from "next/navigation";
import { Material, User } from "./models";
import { connectToDB } from "./utils";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";


export const addUser = async (formData) => {
  const {
    username,
    email,
    password,
    phone,
    titre,
    status,
    adresse,
    departement,
  } = Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const truncatedHash = hashedPassword.substring(0, 20); //hachage à 20 caractères
    const newUser = new User({
      username,
      email,
      password: truncatedHash,
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

export const updateUser = async (formData) => {
  const {
    id,
    username,
    email,
    password,
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
    password,
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
 
    await User.findByIdAndDelete  
  } catch (err) {
    console.log(err);
    throw new Error("Echec de la modification!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

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