import { useQuery } from "@tanstack/react-query";
import PostService from "../services/post.service";
import { PaginatedRequestByUserParams, PaginatedRequestParams } from "../types";

export const useFetchPaginatedPosts = (params: PaginatedRequestParams) => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => PostService.fetchPaginatedPosts(params),
    initialData: [],
  });
};

export const useFetchPaginatedPostsByUser = (
  params: PaginatedRequestByUserParams
) => {
  return useQuery({
    queryKey: ["user-posts"],
    queryFn: () => PostService.fetchPaginatedPostsByUser(params),
    initialData: [],
  });
};
