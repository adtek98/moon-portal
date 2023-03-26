import Image from "next/image";
import logo from "../../public/moonLogo.svg";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between top-0 w-full bg-black h-[6%]">
        <Image
          draggable={false}
          src={logo}
          alt="moon Logo"
          className="w-1/12"
        />
        <Nav />
        <div className="w-1/12">
          <p className="text-3xl my-auto md:hidden lg:hidden text-gray-300"></p>
        </div>
      </div>
    </>
  );
};
