import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../libs/models";
import { connectToDB } from "../libs/utils";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    await connectToDB();
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("Invalid credentials!");

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isPasswordCorrect) throw new Error("Invalid credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Login failed!");
  }
};

const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const user = await login(credentials);
          if (user) {
            return user;
          }
          return null;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login", // Redirect to the login page on error
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
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

export default NextAuth(authConfig);
