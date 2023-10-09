"use client";
import PostForm from "@/components/templates/BlogPostForm";
import { useFetchSinglePost } from "@/lib/hooks/useFetchDataById";
import { useUpdateSinglePost } from "@/lib/hooks/useMutatePost";
import { useTypedSelector } from "@/lib/hooks/useTypedSelector";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

const EditPostPage = () => {
  const params = useParams();
  const router = useRouter();
  const [text, setText] = useState<string>();
  const { postId, userId } = params;

  const { currentPost } = useTypedSelector((state) => state.postReducer);

  const { mutate, isLoading } = useUpdateSinglePost({
    onSuccess: () => {
      toast.success("Changes saved");
      router.push("/" + userId + "/posts");
    },
    onError: () => {
      toast.error("Failed to update");
    },
  });

  const { data } = useFetchSinglePost({ id: postId as string }, currentPost);

  return (
    <div className="px-2 md:px-0">
      <div className="py-4">
        <h5 className="text-3xl font-bold">Edit Post</h5>
      </div>
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
        isLoading={isLoading}
        buttonValue={"Save Changes"}
      />
    </div>
  );
};

export default EditPostPage;
