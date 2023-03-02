import {
  CheckIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

export default function UnitSystemInfo({ unit }) {
  const [editable, setEditable] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {};

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
    if (editable) {
      setEditable(false);
      toast.info("Edit mode deactivated");
    } else {
      setEditable(true);
      toast.info("Edit mode activated");
    }
  };
  if (editable) {
    return (
      <div className="infoContainer col-span-2 row-span-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="font-bold text-xl mb-3 mt-1 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end">
            <h1 className="mr-4">SYSTEM INFO - edit mode</h1>
            <div className="flex">
              <button
                className="mr-3 text-gray-500 hover:text-white text-2xl"
                onClick={(e) => handleClick(e)}
                type="submit"
              >
                <CheckIcon className="w-7 h-7" />
              </button>
              <button
                className=" text-gray-500 hover:text-white text-2xl"
                onClick={(e) => handleClick(e)}
              >
                <XMarkIcon className="w-7 h-7" />
              </button>
            </div>
          </div>
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
      <div className="font-bold text-xl mb-3 mt-1 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end">
        <h1 className="mr-4">SYSTEM INFO</h1>
        <button
          className="text text-gray-500 hover:text-white text-2xl"
          onClick={(e) => handleClick(e)}
        >
          <PencilSquareIcon className="w-7 h-7 align-middle" />
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

const schema = yup
  .object({
    userName: yup.string().required("Please enter Username"),
    passWord: yup.string().required("Please enter Password"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;
