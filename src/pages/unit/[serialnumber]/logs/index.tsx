import { ArrowLongLeftIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import { GetServerSideProps, GetStaticPaths } from "next";
import Link from "next/link";
import React from "react";
import TitleContainer from "../../../../components/TitleContainer";

export default function Logs({ unit }) {
  return (
    <>
      <TitleContainer title={"Logs - " + unit.name}>
        <Link href="/fleet">
          <ArrowLongLeftIcon className="h-12 w-12 text-gray-500 hover:text-white" />
        </Link>
      </TitleContainer>

      <div className="py-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 grid-rows-1 h-full">
        <div className="infoContainer px-2 py-4 p-1 rounded-sm mt-2 mx-auto w-full"></div>
      </div>
    </>
  );
}

export const getStaticProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/unit/${context.params.serialnumber}`
  );
  const unit = await res.json();

  return {
    props: {
      unit,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/units`);
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
