import { useState } from "react";
import { UnitItem } from "./UnitItem";

export const UnitContainer = ({ units }) => {
  const [sorting, setSorting] = useState("DEFAULT");
  const [query, setQuery] = useState("");

  // search function
  const search = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.serialNumber.includes(query)
    );
  };

  // sorting function
  const sortList = (data) => {
    if (sorting == "a>z") {
      return data.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    if (sorting == "z>a") {
      return data.sort((a, b) => (a.name > b.name ? -1 : 1));
    }
    return data;
  };

  return (
    <>
      <div className="max-h-full overflow-auto ">
        <div className="lg:w-10/12 mx-auto">
          <div className="m-auto flex justify-between items-center">
            <select
              onChange={(e) => setSorting(e.target.value)}
              defaultValue={"DEFAULT"}
              className="h-10 lg:w-1/6 bg-gray-700 my-3 text-center border border-gray-400 border-x-0 border-t-0 text-gray-400"
            >
              <option value={"DEFAULT"} hidden>
                SORT AFTER
              </option>
              <option value="a>z">NAME A &gt; Z</option>
              <option value="z>a">NAME Z &gt; A</option>
            </select>
            <input
              type="text"
              className="h-10 lg:w-1/6 bg-gray-700 text-center border border-gray-400 border-x-0 border-t-0"
              placeholder="SEARCH"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <ul className="pb-3">
            <UnitItem units={sortList(search(units))} />
          </ul>
        </div>
      </div>
    </>
  );
};
