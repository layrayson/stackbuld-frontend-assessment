import { useQuery } from "@tanstack/react-query";
import PostService from "../services/post.service";
import { PaginatedRequestByUserParams, PaginatedRequestParams } from "../types";

export const useFetchPaginatedPosts = (
  params: PaginatedRequestParams,
  enabled?: boolean
) => {
  return useQuery({
    queryKey: ["posts", params.title, params.page],
    queryFn: () => PostService.fetchPaginatedPosts(params),
    enabled: enabled ?? true,
  });
};

export const useFetchPaginatedPostsByUser = (
  params: PaginatedRequestByUserParams
) => {
  return useQuery({
    queryKey: ["user-posts", params.title, params.page],
    queryFn: () => PostService.fetchPaginatedPostsByUser(params),
  });
};
