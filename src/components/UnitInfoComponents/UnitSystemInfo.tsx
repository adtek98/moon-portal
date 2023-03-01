import { faL, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function UnitSystemInfo({ unit }) {
  const [editable, setEditable] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (editable) {
      setEditable(false);
    } else {
      setEditable(true);
    }
  };
  if (editable) {
    return (
      <div className="infoContainer col-span-2 row-span-2">
        <div className="font-bold text-xl mb-3 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end">
          <h1 className="mr-4">SYSTEM INFO - edit mode</h1>
          <button
            className="text text-gray-500 hover:text-white text-2xl"
            onClick={(e) => handleClick(e)}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>
        <form>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div>
              <p className="font-thin mx-2 mb-px">Unit Name:</p>
              <input
                className="infoColumn pl-2"
                type="text"
                defaultValue={unit.name}
              />
            </div>
            <div>
              <p className="font-thin mx-2 mb-px">Owner:</p>
              <input
                className="infoColumn pl-2"
                type="text"
                defaultValue={unit.owner}
              />
            </div>
            <div>
              <p className="font-thin mx-2 mb-px">Registered:</p>
              <input
                className="infoColumn pl-2"
                type="text"
                defaultValue={unit.registered}
              />
            </div>
            <div>
              <p className="font-thin mx-2 mb-px">SerialNumber:</p>
              <input
                className="infoColumn pl-2"
                type="text"
                defaultValue={unit.serialNumber}
              />
            </div>
            <div>
              <p className="font-thin mx-2 mb-px">Firmware:</p>
              <input
                className="infoColumn pl-2"
                type="text"
                defaultValue={unit.firmware}
              />
            </div>
            <div>
              <p className="font-thin mx-2 mb-px">EyesSerial:</p>
              <input
                className="infoColumn pl-2"
                type="text"
                defaultValue={unit.eyesSerial}
              />
            </div>
            <div>
              <p className="font-thin mx-2 mb-px">Location:</p>
              <input
                className="infoColumn pl-2"
                type="text"
                defaultValue={unit.location}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className="infoContainer col-span-2 row-span-2">
      <div className="font-bold text-xl mb-3 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end">
        <h1 className="mr-4">SYSTEM INFO</h1>
        <button
          className="text text-gray-500 hover:text-white text-2xl"
          onClick={(e) => handleClick(e)}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>
      <form>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <p className="font-thin mx-2 mb-px">Unit Name:</p>
            <input
              disabled
              className="infoColumn pl-2"
              type="text"
              defaultValue={unit.name}
            />
          </div>
          <div>
            <p className="font-thin mx-2 mb-px">Owner:</p>
            <input
              disabled
              className="infoColumn pl-2"
              type="text"
              defaultValue={unit.owner}
            />
          </div>
          <div>
            <p className="font-thin mx-2 mb-px">Registered:</p>
            <input
              disabled
              className="infoColumn pl-2"
              type="text"
              defaultValue={unit.registered}
            />
          </div>
          <div>
            <p className="font-thin mx-2 mb-px">SerialNumber:</p>
            <input
              disabled
              className="infoColumn pl-2"
              type="text"
              defaultValue={unit.serialNumber}
            />
          </div>
          <div>
            <p className="font-thin mx-2 mb-px">Firmware:</p>
            <input
              disabled
              className="infoColumn pl-2"
              type="text"
              defaultValue={unit.firmware}
            />
          </div>
          <div>
            <p className="font-thin mx-2 mb-px">EyesSerial:</p>
            <input
              disabled
              className="infoColumn pl-2"
              type="text"
              defaultValue={unit.eyesSerial}
            />
          </div>
          <div>
            <p className="font-thin mx-2 mb-px">Location:</p>
            <input
              disabled
              className="infoColumn pl-2"
              type="text"
              defaultValue={unit.location}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
