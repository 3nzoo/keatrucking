export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
        token.username = user.username;
        token.gmaps = user.gmaps;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        console.log(33333, token)
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
        session.user.username = token.username;
        session.user.gmaps = token.gmaps;
      }
      return session;
    },

    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnDeliveries = request.nextUrl?.pathname.startsWith("/delivery");
      const isOnAdminDeliveries = request.nextUrl?.pathname.startsWith("/deliveries");
      const isOnBranch = request.nextUrl?.pathname.startsWith("/branch");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      const isOnHomePage = request.nextUrl?.pathname === "/";
      const slug = request.nextUrl?.pathname.split('/').pop().split('FC-')[0];

      if (isOnHomePage && user) {
        if (user.isAdmin) {
          return Response.redirect(new URL("/admin", request.nextUrl));
        } else {
          return Response.redirect(new URL("/branch", request.nextUrl));
        }
      }

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // ONLY AUTHENTICATED USERS CAN REACH THE DELIVERY PAGE
      if (isOnDeliveries && !user) {
        return false;
      }


      if (isOnDeliveries && user) {
        if (!user?.isAdmin && slug !== user?.username) {
          return false;
        }
      }

      if (isOnAdminDeliveries && !user?.isAdmin) {
        return false
      }


      if (isOnBranch && !user) {
        return false;
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
      if (isOnLoginPage && user) {
        if (user.isAdmin) {
          return Response.redirect(new URL("/admin", request.nextUrl));
        } else {
          return Response.redirect(new URL("/branch", request.nextUrl));
        }
      }

      return true
    },
  },
};
