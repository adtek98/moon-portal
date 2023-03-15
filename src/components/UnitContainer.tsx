import { useState } from "react";
import { UnitItem } from "./UnitItem";

export const UnitContainer = ({ units }) => {
  const [sorting, setSorting] = useState("DEFAULT");
  const [query, setQuery] = useState("");

  // search function
  const search = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.location.toLowerCase().includes(query.toLowerCase()) ||
        item.serialNumber.includes(query.toLowerCase())
    );
  };

  // sorting function
  const sortList = (data) => {
    if (sorting == "n:a>z") {
      return data.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    if (sorting == "n:z>a") {
      return data.sort((a, b) => (a.name > b.name ? -1 : 1));
    }
    if (sorting == "l:a>z") {
      return data.sort((a, b) => (a.location > b.location ? 1 : -1));
    }
    if (sorting == "l:z>a") {
      return data.sort((a, b) => (a.location > b.location ? -1 : 1));
    }

    return data;
  };

  return (
    <div className="py-2 h-full flex flex-col gap-5">
      <div className="w-full m-auto flex justify-between items-center h-[10%] infoContainer">
        <select
          onChange={(e) => setSorting(e.target.value)}
          defaultValue={"DEFAULT"}
          className="focus:fo h-10 lg:w-1/6 w-44 bg-gray-900 my-3 text-center border border-gray-400 border-x-0 border-t-0 text-gray-400"
        >
          <option value={"DEFAULT"} hidden>
            SORT AFTER
          </option>
          <option value="n:a>z">NAME: A &gt; Z</option>
          <option value="n:z>a">NAME: Z &gt; A</option>
          <option value="l:a>z">LOCATION: A &gt; Z</option>
          <option value="l:z>a">LOCATION: Z &gt; A</option>
        </select>
        <input
          type="text"
          className="h-10 lg:w-1/6 w-44 text-center bg-gray-900 border border-gray-400 border-x-0 border-t-0"
          placeholder="SEARCH"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="row-span-4 max-h-[90%] overflow-auto infoContainer">
        <table className="mx-auto md:w-full lg:w-full ">
          <thead className="">
            <tr className="text-center text-lg underline">
              <th className="w-1/4">Name</th>
              <th className="w-1/4">Location</th>
              <th className="w-1/4">Serial Number</th>
              <th className="w-1/4">Owner</th>
            </tr>
          </thead>
          <tbody>
            <UnitItem units={sortList(search(units))} />
          </tbody>
        </table>
      </div>
    </div>
  );
};
