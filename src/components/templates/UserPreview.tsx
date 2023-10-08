import Image from "next/image";

interface UserPreviewProps {
  avatar: string;
  userName: string;
  onClick?(): void;
}
const UserPreview = ({ avatar, userName, onClick }: UserPreviewProps) => {
  return (
    <a onClick={onClick} className="cursor-pointer">
      <div className="px-4 py-2 hover:bg-gray-100">
        <div className="flex gap-4 items-center">
          <div className="flex-none">
            <Image
              width={40}
              height={40}
              className="rounded-full"
              src={avatar}
              alt={userName}
            />
          </div>
          <div>
            <div>
              <h5 className="font-medium text-base">{userName}</h5>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default UserPreview;
