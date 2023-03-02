import Image from "next/image";
import logo from "../../public/moonLogo.svg";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between top-0 w-full bg-black h-[6%]">
        <Image draggable={false} src={logo} alt="moon Logo" width={125} />
        <div className="text-3xl my-auto mx-3 md:hidden lg:hidden text-gray-300"></div>
      </div>
    </>
  );
};
