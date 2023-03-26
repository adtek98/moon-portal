import { Nav } from "../components/Nav";
import Link from "next/link";

export default function PortalLayout({ children }) {
  return (
    <div className="flex flex-col items-center noselect h-[88%]">
      <div className="lg:w-4/6 w-full h-full">{children}</div>
    </div>
  );
}
