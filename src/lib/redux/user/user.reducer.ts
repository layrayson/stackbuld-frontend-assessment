import { User } from "@/lib/types";
import { UserActionType, UserActions } from "./user.type";

interface State {
  currentUser: User | null;
}

const initialState: State = {
  currentUser: null,
};

export const userReducer = (
  state: State = initialState,
  action: UserActions
): State => {
  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload ?? state.currentUser,
      };
    default:
      return state;
  }
};
