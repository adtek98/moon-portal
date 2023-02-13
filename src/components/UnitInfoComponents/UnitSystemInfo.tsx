import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const UnitSystemInfo = ({ unit }) => {
  return (
    <>
      <div className="px-2 py-5 bg-gray-600 p-1 rounded-xl col-span-4">
        <form>
          <div className="font-bold text-xl mb-3 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end">
            <h1 className="mr-4">SYSTEM INFO</h1>
            <button
              className="text text-gray-500 hover:text-white text-2xl"
              onClick={}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 text-sm">
            <div>
              <p className="font-thin text-sm mx-2 mb-px">Unit Name:</p>
              <input
                disabled
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
                defaultValue={unit.name}
              />
            </div>
            <div>
              <p className="font-thin text-sm mx-2 mb-px">Owner:</p>
              <input
                disabled
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
                defaultValue={unit.owner}
              />
            </div>
            <div>
              <p className="font-thin text-sm mx-2 mb-px">Registered:</p>
              <input
                disabled
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
                defaultValue={unit.registered}
              />
            </div>
            <div>
              <p className="font-thin text-sm mx-2 mb-px">SerialNumber:</p>
              <input
                disabled
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
                defaultValue={unit.serialNumber}
              />
            </div>
            <div>
              <p className="font-thin text-sm mx-2 mb-px">Firmware:</p>
              <input
                disabled
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
                defaultValue={unit.firmware}
              />
            </div>
            <div>
              <p className="font-thin text-sm mx-2 mb-px">EyesSerial:</p>
              <input
                disabled
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
                defaultValue={unit.eyesSerial}
              />
            </div>
            <div>
              <p className="font-thin text-sm mx-2 mb-px">Location:</p>
              <input
                disabled
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
                defaultValue={unit.location}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
