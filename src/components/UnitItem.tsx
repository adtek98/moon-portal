import { useRouter } from "next/router";

export const UnitItem = ({ units }) => {
  const router = useRouter();
  return (
    <>
      {units.map((unit, index) => (
        <tr
          onClick={() => router.push(`/unit/${unit.serialNumber}`)}
          key={index}
          className="text-center cursor-pointer my-5 h-14 w-full border border-gray-500 hover:bg-gray-600 hover:border-white border-x-0 border-t-0"
        >
          <td>
            <p className="text-lg">{unit.name}</p>
          </td>
          <td>
            <p className="text-sm">{unit.location}</p>
          </td>
          <td>
            <p className="text-sm">{unit.serialNumber}</p>
          </td>
          <td className="">{unit.owner}</td>
        </tr>
      ))}
    </>
  );
};
