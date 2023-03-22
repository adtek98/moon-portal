import { ArrowLongLeftIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import { GetServerSideProps, GetStaticPaths } from "next";
import Link from "next/link";
import React from "react";
import TitleContainer from "../../../../components/TitleContainer";
import logs from "../../../../../lib/data/logs";

export default function Logs({ unit }) {
  return (
    <>
      <TitleContainer title={"Logs - " + unit.name}>
        <Link href={`/unit/${unit.serialNumber}`}>
          <ArrowLongLeftIcon className="h-12 w-12 text-gray-500 hover:text-white" />
        </Link>
      </TitleContainer>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 grid-rows-1 h-full">
        <div className="infoContainer overflow-auto">
          {logs.map((item, index) => (
            <div key={index} className="mb-4 border-b">
              <p>{item.message.resource["service.name"]}</p>
              <p>Type: {item.message.severity_text}</p>
              <p>Message: {item.message.body}</p>
              <p>Date: {Date(item.timestamp)}</p>
            </div>
          ))}
        </div>
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
