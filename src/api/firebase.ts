import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User,
} from "firebase/auth";
import { getDatabase, ref, get, set, remove } from "firebase/database";
import { v4 as uuid } from "uuid";
import { CartProductData, NewProductData, ProductData } from "../types";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);

provider.setCustomParameters({
  prompt: "select_account",
});

const login = () => {
  signInWithPopup(auth, provider).catch(console.error);
};

const logout = () => {
  signOut(auth).catch(console.error);
};

const adminUser = async (user: User) => {
  return get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
};

const addNewProduct = async (product: NewProductData, image: string) => {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(","),
  });
};

const getProducts = async (): Promise<ProductData[]> => {
  return get(ref(database, "products")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
};

const getCart = async (userId: string): Promise<CartProductData[]> => {
  return get(ref(database, `carts/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
};

const addOrUpdateToCart = async (userId: string, product: CartProductData) => {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
};

const removeFromCart = async (userId: string, productId: string) => {
  return remove(ref(database, `carts/${userId}/${productId}`));
};

export {
  auth,
  login,
  logout,
  adminUser,
  addNewProduct,
  getProducts,
  getCart,
  addOrUpdateToCart,
  removeFromCart,
};
