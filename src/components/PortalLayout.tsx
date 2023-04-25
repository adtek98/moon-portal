import { PropsWithChildren } from "react";

export default function PortalLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center noselect h-[88%]">
      <div className="lg:w-4/6 w-full h-full">{children}</div>
    </div>
  );
}
