import axiosClient from "../axios/client";
import {
  CreatePostParams,
  PaginatedRequestByUserParams,
  PaginatedRequestParams,
  PaginatedResponse,
  Post,
  RequestByIdParams,
  UpdatePostParams,
} from "../types";

export default class PostService {
  static fetchPaginatedPosts = ({
    page,
    title,
  }: PaginatedRequestParams): Promise<PaginatedResponse<Post>> =>
    axiosClient
      .get<any, PaginatedResponse<Post>>(
        `/post?limit=10&page=${page}${title ? "&text=" + title : ""}`
      )
      .then((res) => ({
        data: res.data,
        page: res.page,
        total: res.total,
      }));

  static fetchPaginatedPostsByUser = ({
    page,
    title,
    userId,
  }: PaginatedRequestByUserParams): Promise<PaginatedResponse<Post>> =>
    axiosClient
      .get<any, PaginatedResponse<Post>>(
        `/user/${userId}/post?limit=10&page=${page}${
          title ? "&text=" + title : ""
        }`
      )
      .then((res) => ({
        data: res.data,
        page: res.page,
        total: res.total,
      }));

  static fetchSinglePost = ({ id }: RequestByIdParams): Promise<Post> =>
    axiosClient.get<any, Post>(`/post/${id}`);

  static createSinglePost = ({ post }: CreatePostParams): Promise<Post> =>
    axiosClient.post<any, Post>(`/post/create`, post);

  static updateSinglePost = ({ post, id }: UpdatePostParams): Promise<Post> =>
    axiosClient.put<any, Post>(`/post/${id}`, post);

  static deleteSinglePost = ({ id }: RequestByIdParams): Promise<string> =>
    axiosClient.delete<any, string>(`/post/${id}`);
}
