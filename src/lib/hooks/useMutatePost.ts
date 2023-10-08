import {
  CreatePostParams,
  RequestByIdParams,
  UpdatePostParams,
} from "../types/index";
import { useMutation } from "@tanstack/react-query";
import PostService from "../services/post.service";

export const useCreateSinglePost = () => {
  return useMutation({
    mutationFn: (params: CreatePostParams) =>
      PostService.createSinglePost(params),
  });
};

export const useUpdateSinglePost = () => {
  return useMutation({
    mutationFn: (params: UpdatePostParams) =>
      PostService.updateSinglePost(params),
  });
};

export const useDeleteSinglePost = () => {
  return useMutation({
    mutationFn: (params: RequestByIdParams) =>
      PostService.deleteSinglePost(params),
  });
};
