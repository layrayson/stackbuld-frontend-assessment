"use client";
import BlogPostPreview from "@/components/templates/BlogPostPreview";
import { useFetchPaginatedPostsByUser } from "@/lib/hooks/useFetchPaginatedData";
import PostAction from "@/lib/redux/post/post.action";
import { useParams, useRouter, usePathname } from "next/navigation";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";

const UserPostsPage = () => {
  const router = useRouter();
  const params = useParams();
  const pathName = usePathname();
  const dispatch: Dispatch<any> = useDispatch();
  const { userId } = params;
  const {
    isLoading: isLoadingPosts,
    isFetching: isFetchingPosts,
    data: posts,
  } = useFetchPaginatedPostsByUser({ page: 1, userId: userId as string });

  return (
    <>
      <div className="max-w-3xl mx-auto">
        {!isLoadingPosts && !isFetchingPosts && (
          <div className="grid gap-4 gap-y-12 md:gap-y-4 grid-cols-1 md:grid-cols-2">
            {posts?.data.map((post, index) => (
              <BlogPostPreview
                key={"post-" + index}
                title={post.text.substring(0, 20)}
                content={post.text}
                blogImage={post.image}
                author={post.owner.firstName + " " + post.owner.lastName}
                avatar={post.owner.picture}
                updatedAt={post.publishDate}
                onClick={() => router.push(pathName + "/" + post.id)}
              />
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => {
          router.push(pathName + "/create");
        }}
      >
        Create
      </button>
    </>
  );
};

export default UserPostsPage;
