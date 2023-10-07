import { AxiosResponse } from "axios";
import axiosClient from "../axios/client";
import { PaginatedResponse, RequestByIdParams, User } from "../types";

export default class UserService {
  static fetchUsers = (): Promise<PaginatedResponse<User>> =>
    axiosClient
      .get<any, PaginatedResponse<User>>(`/user?limit=5`)
      .then((res) => {
        console.log(res);
        return {
          data: res.data,
          page: res.page,
        };
      });

  static fetchSingleUser = ({ id }: RequestByIdParams) =>
    axiosClient.get(`/user/${id}`).then((res) => res.data);
}
