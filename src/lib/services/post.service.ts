import axiosClient from "../axios/client";
import {
  CreatePostParams,
  PaginatedRequestByUserParams,
  PaginatedRequestParams,
  RequestByIdParams,
  UpdatePostParams,
} from "../types";

export default class PostService {
  static fetchPaginatedPosts = ({ page, title }: PaginatedRequestParams) =>
    axiosClient
      .get(`/post?limit=10&page=${page}${title ? "&title=" + title : ""}`)
      .then((res) => res.data);

  static fetchPaginatedPostsByUser = ({
    page,
    title,
    userId,
  }: PaginatedRequestByUserParams) =>
    axiosClient
      .get(
        `/user/${userId}/post?limit=10&page=${page}${
          title ? "&title=" + title : ""
        }`
      )
      .then((res) => res.data);

  static fetchSinglePost = ({ id }: RequestByIdParams) =>
    axiosClient.get(`/post/${id}`).then((data) => data.data);

  static createSinglePost = ({ post }: CreatePostParams) =>
    axiosClient.post(`/post/create`, post).then((res) => res.data);

  static updateSinglePost = ({ post, id }: UpdatePostParams) =>
    axiosClient.put(`/post/${id}`, post).then((res) => res.data);

  static deleteSinglePost = ({ id }: RequestByIdParams) =>
    axiosClient.delete(`/post/${id}`).then((res) => res.data);
}
