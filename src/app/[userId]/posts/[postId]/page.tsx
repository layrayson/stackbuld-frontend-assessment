"use client";
import Button from "@/components/custom/Button";
import BlogPostDetailedView from "@/components/templates/BlogPostDetailedView";
import { useFetchSinglePost } from "@/lib/hooks/useFetchDataById";
import { useDeleteSinglePost } from "@/lib/hooks/useMutatePost";
import { useTypedSelector } from "@/lib/hooks/useTypedSelector";
import { useParams, usePathname, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const ViewSingleUserPostPage = () => {
  const params = useParams();

  const router = useRouter();
  const pathName = usePathname();
  const { postId, userId } = params;

  const { currentPost } = useTypedSelector((state) => state.postReducer);
  const { mutate, isLoading: deleting } = useDeleteSinglePost({
    onSuccess: () => {
      toast.success("Delete successful");
      router.push("/" + userId + "/posts");
    },
    onError: () => {
      toast.error("Delete operation failed");
    },
  });

  const { isLoading, data } = useFetchSinglePost(
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

        <div className="pt-24 flex justify-end gap-4 px-2 md:px-0">
          <Button
            className="bg-blue-700 text-white w-fit px-8"
            value={"Edit"}
            onClick={() => {
              router.push(pathName + "/edit");
            }}
          />
          <Button
            className="bg-red-700 text-white w-fit px-8"
            value={"Delete Post"}
            isLoading={deleting}
            onClick={() => {
              mutate({ id: currentPost?.id ?? data!.id });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ViewSingleUserPostPage;
