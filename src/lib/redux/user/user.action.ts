import { User } from "@/lib/types";
import { Dispatch } from "redux";
import { UserActionType, UserActions } from "./user.type";

export default class UserAction {
  static setCurrentUser = (params: User) => (dispatch: Dispatch<UserActions>) =>
    dispatch({
      type: UserActionType.SET_CURRENT_USER,
      payload: params,
    });
}
