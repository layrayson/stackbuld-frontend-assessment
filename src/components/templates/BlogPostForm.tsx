import { ChangeEvent, FormEvent } from "react";
import Button from "../custom/Button";

interface PostFormProps {
  text: string;
  onInputChanged(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  onSubmit(e: FormEvent<HTMLFormElement>): void;
  buttonValue: string;
  isLoading: boolean;
}

const PostForm = ({
  text,
  onInputChanged,
  onSubmit,
  buttonValue,
  isLoading,
}: PostFormProps) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mt-10">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="title"
                value={text.substring(0, 20)}
                onChange={onInputChanged}
                id="title"
                placeholder="Post title"
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Content
            </label>
            <div className="mt-2">
              <textarea
                value={text}
                name="content"
                id="content"
                onChange={onInputChanged}
                placeholder="Post content"
                rows={7}
                className="block w-full rounded-md border-0 py-1.5  px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Button type="submit" isLoading={isLoading} value={buttonValue} />
        </div>
      </form>
    </div>
  );
};

export default PostForm;
