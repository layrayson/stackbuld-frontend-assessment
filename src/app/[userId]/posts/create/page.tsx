"use client";
import PostForm from "@/components/templates/BlogPostForm";
import { useCreateSinglePost } from "@/lib/hooks/useMutatePost";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

const EditPostPage = () => {
  const params = useParams();
  const { userId } = params;
  const router = useRouter();
  const [text, setText] = useState<string>("");

  const { mutate, isLoading } = useCreateSinglePost({
    onSuccess: () => {
      toast.success("You've created a new post");
      router.push("/" + userId + "/posts");
    },
    onError: () => {
      toast.error("Failed to create");
    },
  });

  return (
    <div className="px-2 md:px-0">
      <div className="py-4">
        <h5 className="text-3xl font-bold">Create Post</h5>
      </div>
      <PostForm
        text={text}
        onInputChanged={function (e: ChangeEvent<HTMLTextAreaElement>): void {
          setText(e.target.value);
        }}
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          mutate({
            post: {
              image:
                "https://img.dummyapi.io/photo-1586969424018-9ad694470d15.jpg",
              text: text,
              owner: userId as string,
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
