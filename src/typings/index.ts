import { User } from "firebase/auth";

interface UserInfo extends User {
  isAdmin?: boolean;
}

export type { UserInfo };
