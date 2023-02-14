import { Nav } from "../components/Nav";
import Link from "next/link";

export const PortalLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-[93%]">
        <div className="py-12 px-10 w-1/6 text-center md:text-sm font-semibold text-gray-500 hidden md:block lg:block">
          <Nav />
        </div>
        <div className="bg-gray-700 lg:rounded-tl-3xl px-3 lg:py-12 lg:px-10 lg:w-5/6 w-full h-full">
          {children}
        </div>
      </div>
    </>
  );
};
