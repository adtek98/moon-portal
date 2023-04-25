import { useRouter } from "next/router";
import { UnitProps } from "../../types";

export const UnitItem = ({ units }: UnitProps) => {
  const router = useRouter();
  return (
    <>
      {units.map((unit, index) => (
        <div
          onClick={() => router.push(`/unit/${unit.serialNumber}`)}
          key={index}
          className="flex text-center items-center justify-center cursor-pointer my-1 h-14 w-full border border-gray-500 hover:bg-gray-600 hover:border-white border-x-0 border-t-0"
        >
          <div className="w-1/4">
            <p className="text-lg">{unit.name}</p>
          </div>
          <div className="w-1/4">
            <p className="text-sm">{unit.location}</p>
          </div>
          <div className="w-1/4">
            <p className="text-sm">{unit.serialNumber}</p>
          </div>
          <div className="w-1/4">
            <p className="text-sm">{unit.owner}</p>
          </div>
        </div>
      ))}
    </>
  );
};
