"use client";

import BlogPostPreview from "@/components/templates/BlogPostPreview";
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
        <div className="grid gap-4 gap-y-12 md:gap-y-4 grid-cols-1 md:grid-cols-4">
          {posts?.data.map((post, index) => (
            <BlogPostPreview
              key={"post-" + index}
              title={post.text.substring(0, 20)}
              content={post.text}
              blogImage={post.image}
              author={post.owner.firstName + " " + post.owner.lastName}
              avatar={post.owner.picture}
              updatedAt={post.publishDate}
              onClick={() => router.push("/" + post.id)}
            />
          ))}
        </div>
      )}
    </>
  );
}
