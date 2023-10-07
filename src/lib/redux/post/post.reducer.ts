import { Post } from "@/lib/types";
import { PostActionType, PostActions } from "./post.type";

interface State {
  currentPost: Post | null;
}

const initialState: State = {
  currentPost: null,
};

export const postReducer = (
  state: State = initialState,
  action: PostActions
): State => {
  switch (action.type) {
    case PostActionType.SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload ?? state.currentPost,
      };
    default:
      return state;
  }
};
