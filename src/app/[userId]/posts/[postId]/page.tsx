"use client";
import { useFetchSinglePost } from "@/lib/hooks/useFetchDataById";
import { useDeleteSinglePost } from "@/lib/hooks/useMutatePost";
import { useTypedSelector } from "@/lib/hooks/useTypedSelector";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const ViewSingleUserPostPage = () => {
  const params = useParams();

  const router = useRouter();
  const pathName = usePathname();
  const { postId } = params;

  const { currentPost } = useTypedSelector((state) => state.postReducer);
  const { mutate } = useDeleteSinglePost();

  const { isFetched, data } = useFetchSinglePost(
    { id: postId as string },
    currentPost
  );
  return (
    <>
      <div>{data?.id}</div>
      <button
        onClick={() => {
          router.push(pathName + "/edit");
        }}
      >
        update
      </button>
      <button
        onClick={() => {
          mutate({ id: currentPost?.id ?? data!.id });
        }}
      >
        Delete
      </button>
    </>
  );
};

export default ViewSingleUserPostPage;
