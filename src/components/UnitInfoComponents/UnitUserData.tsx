import Link from "next/link";

export default function UnitUserData() {
  return (
    <>
      <div className="infoContainer col-span-4 lg:col-span-2">
        <div className="font-bold text-xl mb-3 mt-1 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end">
          <h1 className="">USER DATA</h1>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <p className="font-thin mx-2 mb-px">Brain:</p>
            <div className="infoColumn">
              <p className="font-semibold mx-2">Settings</p>
              <button className="infoButton">Info</button>
            </div>
            <div className="mt-3 infoColumn">
              <p className="font-semibold mx-2">Presets</p>
              <button className="infoButton">Info</button>
            </div>
          </div>
          <div>
            <p className="font-thin mx-2 mb-px">Eyes:</p>
            <div className="infoColumn">
              <p className="font-semibold mx-2">Eye Mappings</p>
              <button className="infoButton">Info</button>
            </div>
            <div className="infoColumn mt-3">
              <p className="font-semibold mx-2">Lens Mappings</p>
              <button className="infoButton">Info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
