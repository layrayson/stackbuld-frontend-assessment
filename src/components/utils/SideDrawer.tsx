"use client";

import { useFetchUsers } from "@/lib/hooks/useFetchUsers";
import { useRouter } from "next/navigation";
import UserPreview from "../templates/UserPreview";
import { useTypedSelector } from "@/lib/hooks/useTypedSelector";

const SideDrawer = () => {
  const router = useRouter();

  const { isLoading, isFetching, data: users } = useFetchUsers();
  const { currentUser } = useTypedSelector((state) => state.userReducer);
  return (
    <div className="py-4">
      <div className="mb-4">
        <div>
          <div className="px-4">
            <h5 className="font-medium text-gray-500">Current User:</h5>
          </div>
          <div className="bg-gray-100">
            <UserPreview
              userName={currentUser?.firstName + " " + currentUser?.lastName}
              avatar={currentUser?.picture ?? ""}
            />
          </div>
        </div>
      </div>
      <div className="px-4">
        <h5 className="text-sm text-gray-500 text-lighter">
          {" "}
          Switch user to view posts
        </h5>
      </div>
      {!isLoading && !isFetching && (
        <div>
          {users?.data.map((user, index) =>
            user.id == currentUser?.id ? null : (
              <UserPreview
                key={"user-" + index}
                userName={user.firstName + " " + user.lastName}
                avatar={user.picture}
                onClick={() => router.push("/" + user.id + "/posts")}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SideDrawer;
