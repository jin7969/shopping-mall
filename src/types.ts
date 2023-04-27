import { User } from "firebase/auth";

interface UserInfo extends User {
  isAdmin?: boolean;
}

interface ProductData {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  description: string;
  options: string[];
}

interface NewProductData {
  title: string;
  price: string;
  category: string;
  description: string;
  options: string;
}

interface CartProductData {
  id: string;
  image: string;
  title: string;
  price: number;
  option: string;
  quantity: number;
}

export type { UserInfo, ProductData, NewProductData, CartProductData };
