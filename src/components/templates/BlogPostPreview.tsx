import Image from "next/image";
import { format } from "date-fns";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface BlogPostPreviewProps {
  title: string;
  content: string;
  blogImage: string;
  author: string;
  avatar: string;
  updatedAt: string;
  onClick(): void;
  showSkeleton?: boolean;
}
const BlogPostPreview = ({
  title,
  content,
  blogImage,
  author,
  avatar,
  updatedAt,
  onClick,
  showSkeleton = false,
}: BlogPostPreviewProps) => {
  const formatted = new Date(updatedAt);
  return (
    <SkeletonTheme highlightColor="#9999">
      <a onClick={onClick} className="cursor-pointer">
        <div>
          <div className="p-2">
            <div className="flex gap-4">
              <div className="flex-none w-12 h-12">
                {showSkeleton ? (
                  <Skeleton className="w-12 h-12 " circle={true} />
                ) : (
                  <Image
                    width={150}
                    height={150}
                    className="rounded-full w-12 h-12"
                    src={avatar}
                    alt={author}
                  />
                )}
              </div>
              <div className="flex-grow">
                <div>
                  <h5 className="font-medium text-lg">
                    {showSkeleton ? <Skeleton /> : author}
                  </h5>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {showSkeleton ? (
                      <Skeleton />
                    ) : showSkeleton ? (
                      ""
                    ) : (
                      format(formatted, "do 'of' MMMM yyyy")
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {showSkeleton ? (
              <Skeleton className="w-full h-80 rounded" />
            ) : (
              <Image
                alt={title}
                src={blogImage}
                className="w-full h-80 md:rounded hover:opacity-50 transition duration-300 object-cover"
                width={480}
                height={480}
              />
            )}
          </div>
          <div className={showSkeleton ? "" : "p-2"}>
            <div className="mb-2">
              <h5 className="line-clamp-1 text-2xl font-bold">
                {" "}
                {showSkeleton ? <Skeleton /> : title}
              </h5>
            </div>
            <div className="">
              <p className="line-clamp-2 text-md font-normal ">
                {showSkeleton ? <Skeleton /> : content}
              </p>
            </div>
          </div>
        </div>
      </a>
    </SkeletonTheme>
  );
};

export default BlogPostPreview;
