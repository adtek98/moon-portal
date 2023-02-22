import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between top-0 w-full bg-black h-[6%] flex-none">
        <img
          className="object-contain"
          src="/MoonLogo2.jpeg"
          height={30}
          width={116}
          alt="hello"
        />
        <div className="text-3xl my-auto mx-3 lg:hidden text-gray-300">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </>
  );
};
