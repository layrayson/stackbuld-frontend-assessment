import Image from "next/image";
import { format } from "date-fns";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface BlogPostDetailedViewProps {
  title?: string;
  content?: string;
  blogImage?: string;
  author?: string;
  avatar?: string;
  updatedAt?: string;
  showSkeleton: boolean;
}
const BlogPostDetailedView = ({
  title,
  content,
  blogImage,
  author,
  avatar,
  updatedAt,
  showSkeleton,
}: BlogPostDetailedViewProps) => {
  const formatted = new Date(updatedAt ?? "");
  return (
    <SkeletonTheme highlightColor="#9999">
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
                  src={avatar ?? ""}
                  alt={author ?? ""}
                />
              )}
            </div>
            <div className="flex-grow">
              <div>
                <h5 className="font-medium text-lg">
                  {" "}
                  {showSkeleton ? <Skeleton /> : author}
                </h5>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {showSkeleton ? (
                    <Skeleton />
                  ) : !updatedAt ? (
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
            <Skeleton className="w-full h-96 rounded" />
          ) : (
            <Image
              alt={title ?? ""}
              src={blogImage ?? ""}
              className="w-full h-96 md:rounded transition duration-300 object-cover"
              width={480}
              height={480}
            />
          )}
        </div>
        <div className="py-2">
          <div className={showSkeleton ? "px-2 md:px-0" : "px-2"}>
            <div className="mb-2">
              <h5 className="text-5xl font-bold">
                {showSkeleton ? <Skeleton /> : title}
              </h5>
            </div>
            <div>
              <p className="text-xl font-normal">
                {showSkeleton ? <Skeleton /> : content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default BlogPostDetailedView;
