import { useState } from "react";
import { UnitItem } from "./UnitItem";
import { Unit, UnitProps } from "../../types";

export const UnitContainer = ({ units }: UnitProps) => {
  const [sorting, setSorting] = useState("DEFAULT");
  const [query, setQuery] = useState("");

  // search function
  const search = (data: Unit[]) => {
    return data.filter(
      (item: Unit) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.location.toLowerCase().includes(query.toLowerCase()) ||
        item.serialNumber.includes(query.toLowerCase())
    );
  };

  // sorting function
  const sortList = (data: Unit[]) => {
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
    <div className="grid grid-cols-1 gap-5 grid-rows-1 h-full">
      <div className="flex flex-col infoContainer h-full ">
        <div className="w-full mx-auto flex gap-5 items-center h-[7%] px-4">
          <select
            onChange={(e) => setSorting(e.target.value)}
            defaultValue={"DEFAULT"}
            className="h-10 lg:w-1/6 w-44 bg-gray-700 my-3 text-center border rounded-md border-gray-400 text-gray-400"
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
            className="h-10 lg:w-1/6 w-44 text-center bg-gray-700 border border-gray-400 rounded-md"
            placeholder="SEARCH"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="row-span-4 h-[93%] px-4 pt-4 pb-1">
          <div className="border-b border-gray-500">
            <div className="flex text-center font-medium">
              <p className="w-1/4">Name</p>
              <p className="w-1/4">Location</p>
              <p className="w-1/4">Serial Number</p>
              <p className="w-1/4">Owner</p>
            </div>
          </div>
          <div className="h-[96%] overflow-auto w-full">
            <UnitItem units={sortList(search(units))} />
          </div>
        </div>
      </div>
    </div>
  );
};
