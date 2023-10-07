import { User } from "@/lib/types";
import { UserActionType, UserActions } from "./user.type";

interface State {
  user: User | null;
}

const initialState: State = {
  user: null,
};

export const userReducer = (
  state: State = initialState,
  action: UserActions
): State => {
  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload ?? state.user,
      };
    default:
      return state;
  }
};
