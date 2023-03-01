import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                        clipRule="evenodd"
                      />
                      <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                    </svg>
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
