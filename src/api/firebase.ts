import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";
import { v4 as uuid } from "uuid";
import { NewProductData, ProductData } from "../types";

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

const onUserStateChange = <T extends (user: User | null) => void>(
  callback: T
) => {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
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

export { login, logout, onUserStateChange, addNewProduct, getProducts };
