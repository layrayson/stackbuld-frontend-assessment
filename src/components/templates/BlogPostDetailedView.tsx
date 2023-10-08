import Image from "next/image";
import { format } from "date-fns";

interface BlogPostDetailedViewProps {
  title: string;
  content: string;
  blogImage: string;
  author: string;
  avatar: string;
  updatedAt: string;
}
const BlogPostDetailedView = ({
  title,
  content,
  blogImage,
  author,
  avatar,
  updatedAt,
}: BlogPostDetailedViewProps) => {
  const formatted = new Date(updatedAt);
  return (
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
          <h5 className="text-5xl font-bold">{title}</h5>
        </div>
        <div className="">
          <p className="text-xl font-normal">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetailedView;
