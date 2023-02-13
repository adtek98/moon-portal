import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetServerSideProps, GetStaticPaths } from "next";
import Link from "next/link";
import TitleContainer from "../../../../components/TitleContainer";

export default function Edit({ unit }) {
  return (
    <>
      <TitleContainer title={unit.name}>
        <Link
          href={`/unit/${unit.serialNumber}`}
          className="text-4xl text-gray-500 hover:text-white"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </Link>
      </TitleContainer>
      <div className="py-2">
        <div className="px-2 py-5 bg-gray-600 p-1 rounded-xl col-span-4 w-1/2">
          <div className="font-bold text-xl mb-3 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end">
            <h1 className="mr-4">EDIT SYSTEM INFO</h1>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 text-sm">
            <div>
              <p className="font-thin text-sm mx-2 mb-px">Unit Name:</p>
              <input
                className="bg-gray-700 h-10 rounded-xl font-semibold px-2 w-full"
                type="text"
                value={unit.name}
              />
            </div>
            <div>
              <p className="font-thin text-sm mx-2 mb-px">Owner:</p>
              <div className="bg-gray-700 h-10 rounded-xl flex items-center">
                <p className="font-semibold mx-2">{unit.owner}</p>
              </div>
            </div>
            <div>
              <p className="font-thin text-sm mx-2 mb-px">Registered:</p>
              <div className="bg-gray-700 h-10 rounded-xl flex items-center">
                <p className="font-semibold mx-2">{unit.registered}</p>
              </div>
            </div>
            <div>
              <p className="font-thin text-sm mx-2 mb-px">SerialNumber:</p>
              <div className="bg-gray-700 h-10 rounded-xl flex items-center">
                <p className="font-semibold mx-2">{unit.serialNumber}</p>
              </div>
            </div>
            <div>
              <p className="font-thin text-sm mx-2 mb-px">Firmware:</p>
              <div className="bg-gray-700 h-10 rounded-xl flex items-center">
                <p className="font-semibold mx-2">{unit.firmware}</p>
              </div>
            </div>
            <div>
              <p className="font-thin text-sm mx-2 mb-px">EyesSerial:</p>
              <div className="bg-gray-700 h-10 rounded-xl flex items-center">
                <p className="font-semibold mx-2">{unit.eyesSerial}</p>
              </div>
            </div>
            <div>
              <p className="font-thin text-sm mx-2 mb-px">Location:</p>
              <div className="bg-gray-700 h-10 rounded-xl flex items-center">
                <p className="font-semibold mx-2">{unit.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://63c5ab2bf80fabd877edd241.mockapi.io/units/${context.params.serialnumber}`
  );
  const unit = await res.json();
  return {
    props: {
      unit,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://63c5ab2bf80fabd877edd241.mockapi.io/units`);
  const units = await res.json();

  const paths = units.map((unit) => {
    return {
      params: {
        serialnumber: unit.serialNumber.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
