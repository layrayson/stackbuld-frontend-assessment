"use client";
import Button from "@/components/custom/Button";
import BlogPostDetailedView from "@/components/templates/BlogPostDetailedView";
import { useFetchSinglePost } from "@/lib/hooks/useFetchDataById";
import { useDeleteSinglePost } from "@/lib/hooks/useMutatePost";
import { useTypedSelector } from "@/lib/hooks/useTypedSelector";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const ViewSinglePostPage = () => {
  const params = useParams();

  const router = useRouter();
  const pathName = usePathname();
  const { postId } = params;

  const { currentPost } = useTypedSelector((state) => state.postReducer);

  const { isFetched, data } = useFetchSinglePost(
    { id: postId as string },
    currentPost
  );
  return (
    <>
      <div>
        {data && (
          <BlogPostDetailedView
            title={data.text.substring(0, 30)}
            content={data.text}
            blogImage={data.image}
            author={data.owner.firstName + " " + data.owner.lastName}
            avatar={data.owner.picture}
            updatedAt={data.publishDate}
          />
        )}
      </div>
    </>
  );
};

export default ViewSinglePostPage;
