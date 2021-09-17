import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from 'axios'

const options = {
    pages: {
        signIn: '/login',
    },
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "test@test.com" },
        password: {  label: "Password", type: "password" }
      },
    async authorize(credentials) {
        try {
          const { data } = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`, {
            identifier: credentials.username,
            password: credentials.password
          });
          if (data) {
            return data;
          }
          else {
            return null;
          }
        } catch (e) {
          console.log('caught error',e);
          const errorMessage = e
          // Redirecting to the login page with error message          in the URL
        //   throw new Error(errorMessage + '&email=' + credentials.email)
          return null;
        }
      }
    })
  ],

  session: {
    jwt: true,
  },

  callbacks: {
    signIn: async (user, account, profile) => {
      return '/'
    },
    // Getting the JWT token from API response
    jwt: async (token, user, account) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.jwt = user.jwt;
        token.id = user.user.id;
        token.username = `${user.user.firstName} ${user.user.lastName}`;
        token.gardens = user.user.gardens;
        token.email = user.user.email;
        token.role = user.user.role;
      }
      return Promise.resolve(token);
    },
  
    session: async (session, user) => {
      session.jwt = user.jwt;
      session.id = user.id;
      session.user.gardens = user.gardens;
      session.user.name = user.username;
      return Promise.resolve(session);
    },

    redirect: async (url, baseUrl) => {
      return baseUrl
    },
  }
}

export default (req, res) => NextAuth(req, res, options)