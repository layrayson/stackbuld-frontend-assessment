import { User } from "@/lib/types";
import { Dispatch } from "redux";
import { UserActionType, UserActions } from "./user.type";

export default class UserAction {
  static setCurrentUser =
    async (params: User) => async (dispatch: Dispatch<UserActions>) =>
      dispatch({
        type: UserActionType.SET_CURRENT_USER,
        payload: params,
      });
}
