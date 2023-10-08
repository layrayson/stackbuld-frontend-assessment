import Image from "next/image";
import { format } from "date-fns";

interface BlogPostPreviewProps {
  title: string;
  content: string;
  blogImage: string;
  author: string;
  avatar: string;
  updatedAt: string;
  onClick(): void;
}
const BlogPostPreview = ({
  title,
  content,
  blogImage,
  author,
  avatar,
  updatedAt,
  onClick,
}: BlogPostPreviewProps) => {
  const formatted = new Date(updatedAt);
  return (
    <a onClick={onClick} className="cursor-pointer">
      <div>
        <div className="p-2">
          <div className="flex gap-4">
            <div className="flex-none">
              <Image
                width={50}
                height={50}
                className="rounded-full"
                src={avatar}
                alt={author}
              />
            </div>
            <div>
              <div>
                <h5 className="font-medium text-lg">{author}</h5>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {format(formatted, "do 'of' MMMM yyyy")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            alt={title}
            src={blogImage}
            className="w-full h-80 rounded hover:opacity-50 transition duration-300 object-cover"
            width={168}
            height={168}
          />
        </div>
        <div className="p-2">
          <div className="mb-2">
            <h5 className="line-clamp-1 text-2xl font-bold">{title}</h5>
          </div>
          <div className="">
            <p className="line-clamp-2 text-md font-normal ">{content}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogPostPreview;
