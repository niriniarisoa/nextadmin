import NextAuth from "next-auth";
import { authConfig } from "../authConfig";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../libs/models";
import { connectToDB } from "../libs/utils";
import bcrypt from "bcrypt";

const login = async (credentials)=>{
 try{
    connectToDB()
    const user = await User.findOne({username:credentials.username})
    if(!user) throw new Error("Wrong credentials!")

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password) 
    if(!isPasswordCorrect) throw new Error("Wrong password!");

    return user;
}catch(err){
    console.log(err);
 throw new Error("Login faild!");
}
};
export const{signIn, signOut , auth }= NextAuth({
    ...authConfig,
    providers:[
        CredentialsProvider({
            async authorize(credentials){
                try{
                    const user = await login(credentials);
                    return user;
                }catch(err){
                    return null;
                }
            },
        }),
    ],
})