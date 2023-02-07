import { GetStaticProps } from "next";
import { PortalLayout } from "../components/PortalLayout";
import { UnitContainer } from "../components/UnitContainer";

export default function Fleet({ units }) {
  return (
    <>
      <div className="titleContainer border border-gray-500 border-x-0 border-t-0 flex justify-between">
        <h1 className="text-3xl text-bold font-bold mb-2">MOON FLEET</h1>
        {/* <select
            defaultValue={"DEFAULT"}
            className="lg:w-1/6 bg-gray-700 my-3 text-center border border-gray-500 border-x-0 border-t-0 text-gray-400"
          >
            <option value={"DEFAULT"} hidden>
              SORT AFTER
            </option>
          </select> */}
        <input
          type="text"
          className="lg:w-1/6 w-15 bg-gray-700 my-3 text-center border border-gray-500 border-x-0 border-t-0"
          placeholder="SEARCH"
        />
        {/* <div className="lg:w-10/12 m-auto flex justify-between lg:p-3">

          </div> */}
      </div>
      <UnitContainer units={units} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://63c5ab2bf80fabd877edd241.mockapi.io/units");
  const units = await res.json();

  return {
    props: {
      units,
    },
  };
};
