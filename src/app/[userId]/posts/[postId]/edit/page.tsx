"use client";
import PostForm from "@/components/templates/BlogPostForm";
import { useFetchSinglePost } from "@/lib/hooks/useFetchDataById";
import { useUpdateSinglePost } from "@/lib/hooks/useMutatePost";
import { useTypedSelector } from "@/lib/hooks/useTypedSelector";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const EditPostPage = () => {
  const params = useParams();

  const router = useRouter();
  const pathName = usePathname();
  const [text, setText] = useState<string>();
  const { postId } = params;

  const { currentPost } = useTypedSelector((state) => state.postReducer);
  const { mutate } = useUpdateSinglePost();

  const { isFetched, data } = useFetchSinglePost(
    { id: postId as string },
    currentPost
  );
  return (
    <>
      <div>Edit Post</div>
      <PostForm
        text={text ?? data?.text ?? ""}
        onInputChanged={function (e: ChangeEvent<HTMLTextAreaElement>): void {
          setText(e.target.value);
        }}
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (!data) return;
          mutate({
            id: data.id,
            post: {
              image: data.image ?? "",
              text: text ?? data.text ?? "",
            },
          });
        }}
        buttonValue={"Save Changes"}
      />
    </>
  );
};

export default EditPostPage;
