"use client";
import Image from "next/image";
import Drawer from "react-modern-drawer";
import { DebounceInput } from "react-debounce-input";
import Link from "next/link";
import { useState } from "react";
import SideDrawer from "./SideDrawer";
import "react-modern-drawer/dist/index.css";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const NavBar = () => {
  const router = useRouter();
  const [showDrawer, setShowDrawer] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <nav className="px-2 md:px-4 py-4 border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-28 flex-grow">
            <Link href={"/"}>
              <div className="flex items-center gap-1">
                <Image src={"/logo.svg"} alt="brand" width={34} height={34} />
                <h5 className="font-medium text-lg hidden md:block">
                  Bloggers
                </h5>
              </div>
            </Link>
            <div className="flex-grow">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <i className="bx bx-search"></i>
                </span>
                <DebounceInput
                  onChange={(event) => {
                    toast.error(
                      "The mock api does not accept filters. It returns the same data on filter even though the request went through",
                      {
                        duration: 3000,
                      }
                    );
                    router.push(
                      `${pathName}${
                        event.target.value ? "?title=" + event.target.value : ""
                      }`
                    );
                  }}
                  placeholder="Search for post"
                  type="text"
                  className="placeholder:text-slate-400 
                block bg-white w-full max-w-sm border border-slate-300 
                rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none
                focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
              </label>
            </div>
          </div>
          <div>
            <button className="p-2" onClick={() => setShowDrawer(true)}>
              <i className="bx bx-menu bx-md"></i>
            </button>
          </div>
        </div>
      </nav>
      <Drawer
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        direction="right"
      >
        <SideDrawer closeDrawer={() => setShowDrawer(false)} />
      </Drawer>
    </>
  );
};

export default NavBar;
