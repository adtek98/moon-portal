import { GetStaticProps } from "next";
import Link from "next/link";
import TitleContainer from "../components/TitleContainer";

export default function Home({ units }) {
  const title = "Home";
  return (
    <>
      <TitleContainer title={title} children={undefined}></TitleContainer>
      <div className="py-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="px-2 py-5 bg-gray-600 p-1 rounded-xl col-span-1">
          <div className="font-bold text-xl mb-3 mt-1 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end">
            <h1 className="">Fleet</h1>
          </div>
          <p className="font-semibold">
            CURRENTLY <span className="text-red-400">{units.length}</span> UNITS
            IN FLEET
          </p>
          <Link
            className="underline text-gray-400 hover:text-white"
            href={"/fleet"}
          >
            View all
          </Link>
        </div>
        <div className="px-2 py-5 bg-gray-600 p-1 rounded-xl col-span-1">
          <div className="font-bold text-xl mb-3 mt-1 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end">
            <h1 className="">Recently Used</h1>
          </div>
          <p className="font-semibold">
            Most recently used device:
            <span className="text-red-400"> {units[0].name}</span>
          </p>
          <Link className="underline text-gray-400 hover:text-white" href={""}>
            View {units[0].name}
          </Link>
          <Link
            className="ml-3 underline text-gray-400 hover:text-white"
            href={""}
          >
            View all
          </Link>
        </div>
        <div className="px-2 py-5 bg-gray-600 p-1 rounded-xl col-span-1">
          <div className="font-bold text-xl mb-3 mt-1 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end">
            <h1 className="">Recently Updated</h1>
          </div>
          <p className="font-semibold">
            Most recently updated device:
            <span className="text-red-400"> {units[0].name}</span>
          </p>
          <Link className="underline text-gray-400 hover:text-white" href={""}>
            View {units[0].name}
          </Link>
          <Link
            className="ml-3 underline text-gray-400 hover:text-white"
            href={""}
          >
            View all
          </Link>
        </div>
      </div>
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
