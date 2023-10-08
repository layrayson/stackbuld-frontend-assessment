"use client";
import PostForm from "@/components/templates/BlogPostForm";
import { useFetchSinglePost } from "@/lib/hooks/useFetchDataById";
import {
  useCreateSinglePost,
  useUpdateSinglePost,
} from "@/lib/hooks/useMutatePost";
import { useTypedSelector } from "@/lib/hooks/useTypedSelector";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const EditPostPage = () => {
  const params = useParams();
  const { userId } = params;

  const router = useRouter();
  const pathName = usePathname();
  const [text, setText] = useState<string>("");

  const { mutate } = useCreateSinglePost();

  return (
    <>
      <div>Edit Post</div>
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
        buttonValue={"Save Changes"}
      />
    </>
  );
};

export default EditPostPage;
