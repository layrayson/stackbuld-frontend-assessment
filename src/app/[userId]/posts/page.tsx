"use client";
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
      {!isLoadingPosts && !isFetchingPosts && (
        <div>
          {posts?.data.map((post, index) => (
            <div
              className="mb-4"
              key={"user-" + index}
              onClick={() => {
                dispatch(PostAction.setCurrentPost(post));
                router.push(pathName + "/" + post.id);
              }}
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
