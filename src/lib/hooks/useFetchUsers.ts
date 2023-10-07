import { useQuery } from "@tanstack/react-query";
import UserService from "../services/user.service";
export const useFetchUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: UserService.fetchUsers,
    initialData: [],
  });
};
