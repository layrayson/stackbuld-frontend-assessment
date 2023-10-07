import { Post } from "@/lib/types";

export enum PostActionType {
  SET_CURRENT_POST = "SET_CURRENT_POST",
}

export type PostActions = {
  payload: Post;
  type: PostActionType.SET_CURRENT_POST;
};
