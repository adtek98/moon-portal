import { TitleContainerProps } from "../../types";

export default function TitleContainer({
  title,
  children,
}: TitleContainerProps) {
  return (
    <>
      <div className="titleContainer flex justify-between items-start shadow-md h-10 px-6">
        <h1 className="text-3xl text-bold font-bold">{title}</h1>
        {children}
      </div>
    </>
  );
}
