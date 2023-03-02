import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import TitleContainer from "../components/TitleContainer";

export default function NewUnit() {
  return (
    <>
      <TitleContainer
        title={"Create new unit"}
        children={undefined}
      ></TitleContainer>

      <div className="py-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 grid-rows-1 h-full">
        <div className="infoContainer px-2 py-4 p-1 rounded-sm mt-2 mx-auto w-full">
          <div className="w-1/4">
            <form>
              <div className="text-sm">
                <div className="mb-2">
                  <p className="font-thin text-sm mx-2 mb-px">Unit Name:</p>
                  <input
                    className="bg-gray-700 h-10 rounded-sm font-semibold px-2 w-full"
                    type="text"
                  />
                </div>
                <div className="my-2">
                  <p className="font-thin text-sm mx-2 mb-px">Owner:</p>
                  <input
                    className="bg-gray-700 h-10 rounded-sm font-semibold px-2 w-full"
                    type="text"
                  />
                </div>
                <div className="my-2">
                  <p className="font-thin text-sm mx-2 mb-px">Registered:</p>
                  <input
                    className="bg-gray-700 h-10 rounded-sm font-semibold px-2 w-full"
                    type="text"
                  />
                </div>
                <div className="my-2">
                  <p className="font-thin text-sm mx-2 mb-px">SerialNumber:</p>
                  <input
                    className="bg-gray-700 h-10 rounded-sm font-semibold px-2 w-full"
                    type="text"
                  />
                </div>
                <div className="my-2">
                  <p className="font-thin text-sm mx-2 mb-px">Firmware:</p>
                  <input
                    className="bg-gray-700 h-10 rounded-sm font-semibold px-2 w-full"
                    type="text"
                  />
                </div>
                <div className="my-2">
                  <p className="font-thin text-sm mx-2 mb-px">EyesSerial:</p>
                  <input
                    className="bg-gray-700 h-10 rounded-sm font-semibold px-2 w-full"
                    type="text"
                  />
                </div>
                <div className="my-2">
                  <p className="font-thin text-sm mx-2 mb-px">Location:</p>
                  <input
                    className="bg-gray-700 h-10 rounded-sm font-semibold px-2 w-full"
                    type="text"
                  />
                </div>
                <div className="mt-5">
                  <button
                    className="mx-auto flex items-center align-middle justify-center gap-2 w-9/12 h-11 text-white focus:ring-4 focus:outline-none font-medium rounded-sm text-lg text-center bg-gray-700 hover:bg-gray-800"
                    type="submit"
                  >
                    <p>Add new</p>
                    <RocketLaunchIcon className="w-5 h-5"></RocketLaunchIcon>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
