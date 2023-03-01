import Link from "next/link";

export default function UnitSupport() {
  return (
    <>
      <div className="infoContainer col-span-4 lg:col-span-2">
        <div className="font-bold text-xl mb-3 mt-1 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end">
          <h1>SUPPORT</h1>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 lg:col-span-2">
          <div>
            <p className="font-thin mx-2 mb-px">Health Status:</p>
            <div className="infoColumn">
              <p className="font-semibold mx-2 text-green-500">GOOD</p>
              <button className="infoButton">Info</button>
            </div>
          </div>
          <div>
            <p className="font-thin mx-2 mb-px">Support Data:</p>
            <div className="infoColumn">
              <p className="font-semibold mx-2">Logs</p>
              <button className="infoButton">Info</button>
            </div>
            <div className="mt-3 infoColumn">
              <p className="font-semibold mx-2">Metrics</p>
              <button className="infoButton">Info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
