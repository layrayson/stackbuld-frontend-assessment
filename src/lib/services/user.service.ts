import axiosClient from "../axios/client";
import { PaginatedResponse, RequestByIdParams, User } from "../types";

export default class UserService {
  static fetchUsers = () =>
    axiosClient.get(`/user?limit=5`).then((res) => res.data);

  static fetchSingleUser = ({ id }: RequestByIdParams) =>
    axiosClient.get(`/user/${id}`).then((res) => res.data);
}
