import { useQuery } from "@tanstack/react-query";
import PostService from "../services/post.service";
import { RequestByIdParams } from "../types";

export const useFetchSinglePost = (params: RequestByIdParams) => {
  return useQuery({
    queryKey: [`post-${params.id}`],
    queryFn: () => PostService.fetchSinglePost(params),
    initialData: [],
  });
};
