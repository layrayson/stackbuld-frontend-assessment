"use client";

import { useFetchPaginatedPosts } from "@/lib/hooks/useFetchPaginatedData";
import { useFetchUsers } from "@/lib/hooks/useFetchUsers";
import { useRouter } from "next/navigation";

export default function Home() {
  const {
    isLoading: isLoadingUsers,
    isFetching: isFetchingUsers,
    data: users,
  } = useFetchUsers();
  const {
    isLoading: isLoadingPosts,
    isFetching: isFetchingPosts,
    data: posts,
  } = useFetchPaginatedPosts({ page: 1 });
  const router = useRouter();

  return (
    <>
      {!isLoadingUsers && !isFetchingUsers && (
        <div>
          {users?.data.map((user, index) => (
            <div
              key={"user-" + index}
              onClick={() => router.push("/" + user.id + "/posts")}
            >
              {user.firstName}
            </div>
          ))}
        </div>
      )}

      {!isLoadingPosts && !isFetchingPosts && (
        <div>
          {posts?.data.map((post, index) => (
            <div
              className="mb-4"
              key={"user-" + index}
              onClick={() => router.push("/" + post.id)}
            >
              {post.text}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
