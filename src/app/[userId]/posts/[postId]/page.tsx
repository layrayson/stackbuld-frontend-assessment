"use client";
import { useFetchSinglePost } from "@/lib/hooks/useFetchDataById";
import { useTypedSelector } from "@/lib/hooks/useTypedSelector";
import { useMutation } from "@tanstack/react-query";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const ViewSingleUserPostPage = () => {
  const params = useParams();

  const router = useRouter();
  const pathName = usePathname();
  const { postId } = params;
  const [enableDelete, setEnableDelete] = useState(false);

  const { currentPost } = useTypedSelector((state) => state.postReducer);

  const { isFetched, data } = useFetchSinglePost(
    { id: postId as string },
    currentPost
  );
  //   const {} = useMutation()
  return (
    <>
      <div>{data?.id}</div>
      <button
        onClick={() => {
          router.push(pathName + "/update");
        }}
      >
        update
      </button>
      <button
        onClick={() => {
          setEnableDelete(true);
        }}
      >
        update
      </button>
    </>
  );
};

export default ViewSingleUserPostPage;
