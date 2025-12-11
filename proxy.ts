import { auth } from "next-auth";

export default auth((req) => {
  // You can run logic here if needed
});

// Protect only /dashboard/* routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
