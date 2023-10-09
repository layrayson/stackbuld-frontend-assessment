import {
  CreatePostParams,
  RequestByIdParams,
  UpdatePostParams,
} from "../types/index";
import { useMutation } from "@tanstack/react-query";
import PostService from "../services/post.service";
import { toast } from "react-hot-toast";

export const useCreateSinglePost = ({
  onSuccess,
  onError,
}: {
  onSuccess(): void;
  onError(): void;
}) => {
  return useMutation({
    mutationFn: (params: CreatePostParams) =>
      PostService.createSinglePost(params),
    onSuccess,
    onError,
  });
};

export const useUpdateSinglePost = ({
  onSuccess,
  onError,
}: {
  onSuccess(): void;
  onError(): void;
}) => {
  return useMutation({
    mutationFn: (params: UpdatePostParams) =>
      PostService.updateSinglePost(params),
    onSuccess,
    onError,
  });
};

export const useDeleteSinglePost = ({
  onSuccess,
  onError,
}: {
  onSuccess(): void;
  onError(): void;
}) => {
  return useMutation({
    mutationFn: (params: RequestByIdParams) =>
      PostService.deleteSinglePost(params),
    onSuccess,
    onError,
  });
};
