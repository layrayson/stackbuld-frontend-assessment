import { ChangeEvent, FormEvent } from "react";

interface PostFormProps {
  title: string;
  content: string;
  onInputChanged(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  onSubmit(e: FormEvent<HTMLFormElement>): void;
  buttonValue: string;
}

const PostForm = ({
  title,
  content,
  onInputChanged,
  onSubmit,
  buttonValue,
}: PostFormProps) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onInputChanged}
            id="title"
            placeholder="Post title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content">Content</label>
          <textarea
            value={content}
            name="content"
            id="content"
            onChange={onInputChanged}
            placeholder="Post content"
            rows={7}
          ></textarea>
        </div>

        <div>
          <button type="submit">{buttonValue}</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
