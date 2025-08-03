import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      role: string;
      customerId?: string;
      markup?: number;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    username: string;
    role: string;
    customerId?: string;
    markup?: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    role: string;
    customerId?: string;
    markup?: number;
  }
} 