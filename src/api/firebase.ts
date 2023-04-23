import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

// provider.setCustomParameters({
//   prompt: "select_account",
// });

const login = () => {
  signInWithPopup(auth, provider).catch(console.error);
};

const logout = () => {
  signOut(auth).catch(console.error);
};

// 사용자의 로그인 상태가 변경될 때마다 이 관찰자가 호출됩니다.
// 콜백함수가 호출되어 setUser 상태를 업데이트 합니다.
const onUserStateChange = (callback: (arg0: User | null) => void) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

export { login, logout, onUserStateChange };
