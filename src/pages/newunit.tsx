import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleContainer from "../components/TitleContainer";

export default function NewUnit() {
  return (
    <>
      <TitleContainer
        title={"CREATE NEW UNIT"}
        children={undefined}
      ></TitleContainer>

      <div className="px-2 py-8 bg-gray-600 p-1 rounded-xl mt-2">
        <form>
          <div className="text-sm w-80 ">
            <div className="mb-2">
              <p className="font-thin text-sm mx-2 mb-px">Unit Name:</p>
              <input
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
              />
            </div>
            <div className="my-2">
              <p className="font-thin text-sm mx-2 mb-px">Owner:</p>
              <input
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
              />
            </div>
            <div className="my-2">
              <p className="font-thin text-sm mx-2 mb-px">Registered:</p>
              <input
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
              />
            </div>
            <div className="my-2">
              <p className="font-thin text-sm mx-2 mb-px">SerialNumber:</p>
              <input
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
              />
            </div>
            <div className="my-2">
              <p className="font-thin text-sm mx-2 mb-px">Firmware:</p>
              <input
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
              />
            </div>
            <div className="my-2">
              <p className="font-thin text-sm mx-2 mb-px">EyesSerial:</p>
              <input
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
              />
            </div>
            <div className="my-2">
              <p className="font-thin text-sm mx-2 mb-px">Location:</p>
              <input
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
              />
            </div>
            <div className="mt-5">
              <button
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full text-sm"
                type="submit"
              >
                <p>CREATE</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
