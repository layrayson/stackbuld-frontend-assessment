"use client";

import { useFetchUsers } from "@/lib/hooks/useFetchUsers";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isLoading, isFetching, data } = useFetchUsers();
  const router = useRouter();

  return (
    <>
      {!isLoading && !isFetching && (
        <div>
          {data?.data.map((user, index) => (
            <div
              key={"user-" + index}
              onClick={() => router.push("/" + user.id)}
            >
              {user.firstName}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
function userRouter() {
  throw new Error("Function not implemented.");
}
