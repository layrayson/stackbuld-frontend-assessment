import { useQuery } from "@tanstack/react-query";
import axiosClient from "../axios/client";

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => axiosClient.get("/user").then((res) => res.data),
    initialData: [],
  });
};
