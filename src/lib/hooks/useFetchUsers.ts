import { useQuery } from "@tanstack/react-query";
import UserService from "../services/user.service";
import { PaginatedResponse, User } from "../types";
export const useFetchUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: UserService.fetchUsers,
  });
};
