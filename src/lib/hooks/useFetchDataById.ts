import { useQuery } from "@tanstack/react-query";
import PostService from "../services/post.service";
import { Post, RequestByIdParams } from "../types";

export const useFetchSinglePost = (
  params: RequestByIdParams,
  initialData: Post | null
) => {
  return useQuery({
    queryKey: [`post-${params.id}`],
    queryFn: () => PostService.fetchSinglePost(params),
    initialData,
  });
};
