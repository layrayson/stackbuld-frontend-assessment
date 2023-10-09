import { AxiosResponse } from "axios";
import axiosClient from "../axios/client";
import { PaginatedResponse, RequestByIdParams, User } from "../types";

export default class UserService {
  static fetchUsers = (): Promise<PaginatedResponse<User>> =>
    axiosClient
      .get<any, PaginatedResponse<User>>(`/user?limit=5`)
      .then((res) => ({
        data: res.data,
        page: res.page,
        total: res.total,
      }));

  static fetchSingleUser = ({ id }: RequestByIdParams) =>
    axiosClient.get(`/user/${id}`).then((res) => res.data);
}
