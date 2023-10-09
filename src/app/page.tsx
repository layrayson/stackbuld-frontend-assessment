"use client";

import Pagination from "@/components/custom/Pagination";
import BlogPostPreview from "@/components/templates/BlogPostPreview";
import { useFetchPaginatedPosts } from "@/lib/hooks/useFetchPaginatedData";
import { useFetchUsers } from "@/lib/hooks/useFetchUsers";
import PostAction from "@/lib/redux/post/post.action";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, useCallback } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";

export default function Home() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const {
    isLoading,
    isFetching,
    data: posts,
  } = useFetchPaginatedPosts({
    page: searchParams.get("page") ?? 1,
    title: title ?? "",
  });
  const router = useRouter();
  const pathName = usePathname();
  const dispatch: Dispatch<any> = useDispatch();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handlePageClick = ({ selected }: { selected: number }) => {
    console.log(selected);
    router.push(pathName + "?" + createQueryString("page", `${selected + 1}`));
  };

  return (
    <>
      <div>
        {
          <div className="grid gap-4 gap-y-12 md:gap-y-4 grid-cols-1 md:grid-cols-2">
            {isLoading || isFetching
              ? [1, 2, 3].map((el, index) => (
                  <BlogPostPreview
                    key={"post-skeleton" + index}
                    title={""}
                    content={""}
                    blogImage={""}
                    author={""}
                    avatar={""}
                    updatedAt={""}
                    onClick={() => {}}
                    showSkeleton={true}
                  />
                ))
              : posts?.data.map((post, index) => (
                  <BlogPostPreview
                    key={"post-" + index}
                    title={post.text.substring(0, 20)}
                    content={post.text}
                    blogImage={post.image}
                    author={post.owner.firstName + " " + post.owner.lastName}
                    avatar={post.owner.picture}
                    updatedAt={post.publishDate}
                    onClick={() => {
                      dispatch(PostAction.setCurrentPost(post));

                      router.push("/posts/" + post.id);
                    }}
                  />
                ))}
          </div>
        }
      </div>
      <div className="w-fit mx-auto pt-8">
        <Pagination
          handlePageClick={handlePageClick}
          pageCount={Math.floor((posts?.total ?? 0) / 10)}
          initialPage={posts?.page ?? 0}
        />
      </div>
    </>
  );
}
