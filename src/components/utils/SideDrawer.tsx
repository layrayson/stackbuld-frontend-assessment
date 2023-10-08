"use client";

import { useFetchUsers } from "@/lib/hooks/useFetchUsers";
import { usePathname, useRouter } from "next/navigation";
import UserPreview from "../templates/UserPreview";
import { useTypedSelector } from "@/lib/hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { Dispatch } from "react";
import UserAction from "@/lib/redux/user/user.action";
import Button from "../custom/Button";
import { toast } from "react-hot-toast";

const SideDrawer = ({ closeDrawer }: { closeDrawer(): void }) => {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch: Dispatch<any> = useDispatch();

  const { isLoading, isFetching, data: users } = useFetchUsers();
  const { currentUser } = useTypedSelector((state) => state.userReducer);
  return (
    <div className="py-4">
      <div className="mb-4">
        <div>
          <div className="px-4 mb-2">
            <h5 className="text-sm text-gray-500 font-medium">Current User</h5>
          </div>
          <div className="bg-gray-100">
            <UserPreview
              userName={currentUser?.firstName + " " + currentUser?.lastName}
              avatar={currentUser?.picture ?? ""}
            />
          </div>
        </div>
        <div className="px-4 mt-4">
          <Button
            value={"Create New Post"}
            onClick={() => {
              if (!currentUser)
                return toast.error("Please select a user to create post");
              router.push("/" + currentUser?.id + "/posts/create");
              closeDrawer();
            }}
          />
        </div>
      </div>
      <div className="px-4 mb-2">
        <h5 className="text-sm text-gray-500 font-medium">
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
                onClick={() => {
                  dispatch(UserAction.setCurrentUser(user));
                  router.push("/" + user.id + "/posts");
                  closeDrawer();
                }}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SideDrawer;
