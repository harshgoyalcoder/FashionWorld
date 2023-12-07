import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connect from "@/app/utils/db";
import User  from "@/app/models/User"; // Import your User model correctly

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        // Define your custom credentials properties here
        username: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        // No need to check `if (credentials)` here
        await connect();
        if(credentials)
        try {
          const user = await User.findOne({
            email: credentials.username, // Change this to match your user model property
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
});

export { handler as GET, handler as POST };
