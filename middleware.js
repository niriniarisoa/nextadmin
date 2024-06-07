import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
    error: "/login", // Redirect to the login page on error
  },
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
