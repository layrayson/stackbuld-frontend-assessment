"use client";
import BlogPostDetailedView from "@/components/templates/BlogPostDetailedView";
import { useFetchSinglePost } from "@/lib/hooks/useFetchDataById";
import { useTypedSelector } from "@/lib/hooks/useTypedSelector";
import { useParams } from "next/navigation";

const ViewSinglePostPage = () => {
  const params = useParams();

  const { postId } = params;

  const { currentPost } = useTypedSelector((state) => state.postReducer);

  const { data, isLoading } = useFetchSinglePost(
    { id: postId as string },
    currentPost
  );
  return (
    <>
      <div>
        <BlogPostDetailedView
          title={data?.text.substring(0, 30)}
          content={data?.text}
          blogImage={data?.image}
          author={data?.owner.firstName + " " + data?.owner.lastName}
          avatar={data?.owner.picture}
          updatedAt={data?.publishDate}
          showSkeleton={isLoading || !data}
        />
      </div>
    </>
  );
};

export default ViewSinglePostPage;
