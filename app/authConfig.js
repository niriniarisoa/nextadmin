import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../libs/models";
import { connectToDB } from "../libs/utils";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isPasswordCorrect) throw new Error("Wrong password!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Login failed!");
  }
};

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ session, user }) {
      session.user = user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
