import Image from "next/image";
import logo from "../../public/moonLogo.svg";

import { Nav } from "./Nav";
import { signOut, useSession } from "next-auth/react";
import { UserIcon } from "@heroicons/react/24/solid";
export const Header = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex justify-between  w-8/12 bg-black h-[6%] mx-auto ">
        <Nav />
        <Image
          draggable={false}
          src={logo}
          alt="moon Logo"
          className="w-1/12"
        />
        <div className="w-4/12 text-right">
          <button className=" h-full border-gray-500 text-gray-500 hover:border-white hover:text-white">
            <UserIcon
              onClick={() =>
                signOut({
                  callbackUrl: `${window.location.origin}/login`,
                })
              }
              className="h-7 w-7 my-auto  border-gray-500 text-gray-500 hover:border-white hover:text-white"
            ></UserIcon>
          </button>
        </div>
      </div>
    </>
  );
};
