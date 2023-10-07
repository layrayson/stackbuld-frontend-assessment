import { User } from "@/lib/types";

export enum UserActionType {
  SET_CURRENT_USER = "SET_CURRENT_USER",
}

export type UserActions = {
  payload: User;
  type: UserActionType.SET_CURRENT_USER;
};
