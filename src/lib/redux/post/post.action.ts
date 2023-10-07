import { Post } from "@/lib/types";
import { Dispatch } from "redux";
import { PostActionType, PostActions } from "./post.type";

export default class PostAction {
  static setCurrentPost = (params: Post) => (dispatch: Dispatch<PostActions>) =>
    dispatch({
      type: PostActionType.SET_CURRENT_POST,
      payload: params,
    });
}
