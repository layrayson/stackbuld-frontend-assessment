import PostForm from "@/components/templates/PostForm";
import { useFetchSinglePost } from "@/lib/hooks/useFetchDataById";
import { useUpdateSinglePost } from "@/lib/hooks/useMutatePost";
import { useTypedSelector } from "@/lib/hooks/useTypedSelector";
import { useParams, usePathname, useRouter } from "next/navigation";

const EditPostPage = () => {
  const params = useParams();

  const router = useRouter();
  const pathName = usePathname();
  const { postId } = params;

  const { currentPost } = useTypedSelector((state) => state.postReducer);
  const { mutate } = useUpdateSinglePost();

  const { isFetched, data } = useFetchSinglePost(
    { id: postId as string },
    currentPost
  );
  const {} = data!;
  return (
    <>
      <div>Edit Post</div>
      {/* <PostForm title={} /> */}
    </>
  );
};

export default EditPostPage;
