import { User } from "firebase/auth";

interface UserInfo extends User {
  isAdmin?: boolean;
}

interface ProductData {
  title: string;
  price: string;
  category: string;
  description: string;
  options: string;
}

export type { UserInfo, ProductData };
