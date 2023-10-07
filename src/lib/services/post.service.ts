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
        `/post?limit=10&page=${page}${title ? "&title=" + title : ""}`
      )
      .then((res) => ({
        data: res.data,
        page: res.page,
      }));

  static fetchPaginatedPostsByUser = ({
    page,
    title,
    userId,
  }: PaginatedRequestByUserParams): Promise<PaginatedResponse<Post>> =>
    axiosClient
      .get<any, PaginatedResponse<Post>>(
        `/user/${userId}/post?limit=10&page=${page}${
          title ? "&title=" + title : ""
        }`
      )
      .then((res) => ({
        data: res.data,
        page: res.page,
      }));

  static fetchSinglePost = ({ id }: RequestByIdParams) =>
    axiosClient.get(`/post/${id}`).then((data) => data.data);

  static createSinglePost = ({ post }: CreatePostParams) =>
    axiosClient.post(`/post/create`, post).then((res) => res.data);

  static updateSinglePost = ({ post, id }: UpdatePostParams) =>
    axiosClient.put(`/post/${id}`, post).then((res) => res.data);

  static deleteSinglePost = ({ id }: RequestByIdParams) =>
    axiosClient.delete(`/post/${id}`).then((res) => res.data);
}
