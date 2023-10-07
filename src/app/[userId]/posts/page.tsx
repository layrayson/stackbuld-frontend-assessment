"use client";
import { useFetchPaginatedPostsByUser } from "@/lib/hooks/useFetchPaginatedData";
import { useParams, useRouter } from "next/navigation";

const UserPostsPage = () => {
  const router = useRouter();
  const params = useParams();
  const { userId } = params;
  const {
    isLoading: isLoadingPosts,
    isFetching: isFetchingPosts,
    data: posts,
  } = useFetchPaginatedPostsByUser({ page: 1, userId: userId as string });

  return (
    <>
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
};

export default UserPostsPage;
