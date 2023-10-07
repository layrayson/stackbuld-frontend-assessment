import {
  CreatePostParams,
  RequestByIdParams,
  UpdatePostParams,
} from "../types/index";
import { useQuery } from "@tanstack/react-query";
import PostService from "../services/post.service";

export const useCreateSinglePost = (params: CreatePostParams) => {
  return useQuery({
    queryKey: ["create-post"],
    queryFn: () => PostService.createSinglePost(params),
    initialData: [],
  });
};

export const useUpdateSinglePost = (params: UpdatePostParams) => {
  return useQuery({
    queryKey: ["update-post"],
    queryFn: () => PostService.updateSinglePost(params),
    initialData: [],
  });
};

export const useDeleteSinglePost = (params: RequestByIdParams) => {
  return useQuery({
    queryKey: ["delete-post"],
    queryFn: () => PostService.deleteSinglePost(params),
    initialData: [],
  });
};
