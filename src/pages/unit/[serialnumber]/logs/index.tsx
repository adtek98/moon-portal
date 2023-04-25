import { ArrowLongLeftIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import { GetServerSideProps, GetStaticPaths } from "next";
import Link from "next/link";
import React, { useState } from "react";
import TitleContainer from "../../../../components/TitleContainer";
import logs from "../../../../../lib/data/logs";
import dayjs from "dayjs";

export default function Logs({ unit }) {
  const [filter, setFilter] = useState("");
  const [query, setQuery] = useState("");
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));

  // search function
  const search = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.location.toLowerCase().includes(query.toLowerCase()) ||
        item.serialNumber.includes(query.toLowerCase())
    );
  };

  const filterList = (data) => {
    return data.filter((item) =>
      item.message.severity_text.toLowerCase().includes(filter)
    );
  };

  const filterDate = (data) => {
    return data.filter(
      (item) => dayjs(item.timestamp).format("YYYY-MM-DD") == date
    );
  };

  return (
    <>
      <TitleContainer title={"Logs - " + unit.name}>
        <Link href={`/unit/${unit.serialNumber}`}>
          <ArrowLongLeftIcon className="h-12 w-12 text-gray-500 hover:text-white" />
        </Link>
      </TitleContainer>

      <div className="grid grid-cols-1 gap-5 grid-rows-1 h-full ">
        <div className="flex flex-col  infoContainer h-full ">
          <div className="w-full mx-auto flex gap-5 items-center h-[7%] px-4">
            <input
              className="h-10 lg:w-1/6 w-44 bg-gray-700 my-3 text-center border rounded-md border-gray-400 text-gray-400"
              type="date"
              defaultValue={date}
              min="2022-01-01"
              max={dayjs().format("YYYY-MM-DD")}
              onChange={(e) => setDate(e.target.value)}
            ></input>
            <select
              onChange={(e) => setFilter(e.target.value)}
              defaultValue={"DEFAULT"}
              className="h-10 lg:w-1/6 w-44 bg-gray-700 my-3 text-center border rounded-md border-gray-400 text-gray-400"
            >
              <option value={"DEFAULT"} hidden>
                Filter Type
              </option>
              <option value="">All</option>
              <option value="info">Info</option>
              <option value="error">Error</option>
            </select>
            <input
              type="text"
              className="h-10 lg:w-1/6 w-44 text-center bg-gray-700 border border-gray-400 rounded-md"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="row-span-4 h-[93%] px-4 pt-4 pb-1">
            <div className="border-b border-gray-500">
              <div className="flex text-center font-medium">
                <p className="w-1/6">Name</p>
                <p className="w-1/6">Type</p>
                <p className="w-2/6">Message</p>
                <p className="w-2/6">Date and Time</p>
              </div>
            </div>
            <div className="h-[96%] overflow-auto w-full  text-center ">
              {filterDate(filterList(logs)).length > 0 ? (
                filterDate(filterList(logs)).map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center cursor-pointer my-1 h-20 w-full border border-gray-500 hover:bg-gray-600 hover:border-white border-x-0 border-t-0"
                  >
                    <div className="w-1/6">
                      <p>{item.message.resource["service.name"]}</p>
                    </div>
                    <div className="w-1/6">
                      <p>{item.message.severity_text}</p>
                    </div>
                    <div className="w-2/6">
                      <p>{item.message.body}</p>
                    </div>
                    <div className="w-2/6">
                      <p>
                        {dayjs(item.timestamp).format(
                          "YYYY-MM-DD - HH:mm:ss [UTC]Z"
                        )}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>
                  Please try another date, as there is no available logs for the
                  selected one
                </p>
              )}
            </div>
          </div>
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
