import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import CredentialsProvider from "next-auth/providers/credentials";
import auth0 from "auth0-js";

const webAuth = new auth0.WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
});

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
    CredentialsProvider({
      authorize: async (credentials) => {
        const response = webAuth.login({
          realm: "Moon Portal",
          email: credentials.username,
          password: credentials.password,
        });
        console.log(response);
        // const token = await response.json();

        // if (token.error) {
        //   throw new Error(token.error_description || "Failed to login");
        // }

        // const user = await fetch(`${process.env.AUTH0_BASE_URL}/userinfo`, {
        //   headers: {
        //     Authorization: `Bearer ${token.access_token}`,
        //   },
        // });

        // return {
        //   ...token,
        //   ...user,
        // };
      },
    }),
  ],
});
