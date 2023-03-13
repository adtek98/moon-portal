import { Nav } from "../components/Nav";
import Link from "next/link";

export default function PortalLayout({ children }) {
  return (
    <div className="flex noselect h-[94%] lg:bg-[url('/LoginBg.png')] bg-contain bg-repeat-round">
      <div className="py-12 px-10 w-1/6 text-center md:text-sm font-semibold text-gray-500 hidden md:block lg:block">
        <Nav />
      </div>
      <div className="lg:rounded-tl-3xl md:rounded-tl-sm px-4 py-12 lg:pt-12 lg:px-10 lg:w-4/6 w-full h-full">
        {children}
      </div>
    </div>
  );
}
