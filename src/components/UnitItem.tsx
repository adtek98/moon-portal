import Link from "next/link";

export const UnitItem = ({ units }) => {
  return (
    <>
      {units.map((unit, index) => (
        <tr
          key={index}
          className="my-5 h-14 w-full border border-gray-500 hover:border-white border-x-0 border-t-0"
        >
          <td>
            <p className="text-lg">{unit.name}</p>
          </td>
          <td>
            <p className="text-sm font-light">{unit.location}</p>
          </td>
          <td>
            <p className="text-sm font-light">{unit.serialNumber}</p>
          </td>
          <td className="">
            <button className="m-auto h-12 w-36 border border-gray-500 rounded text-center text-gray-500 hover:text-white hover:border-white">
              <Link href={`/unit/${unit.serialNumber}`} className="">
                <p className="m-auto">Show Unit</p>
              </Link>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};
