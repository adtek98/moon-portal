import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { GetServerSideProps, GetStaticPaths } from "next";
import Link from "next/link";
import React from "react";
import TitleContainer from "../../../../components/TitleContainer";
import { Tab } from "@headlessui/react";
import metrics from "../../../../../lib/data/metrics";
import TemperatureChart from "../../../../components/Charts/TemperatureChart";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Metrics({ unit }) {
  return (
    <>
      <TitleContainer title={"Metrics - " + unit.name}>
        <Link href={`/unit/${unit.serialNumber}`}>
          <ArrowLongLeftIcon className="h-12 w-12 text-gray-500 hover:text-white" />
        </Link>
      </TitleContainer>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 grid-rows-1 h-full">
        <div className="infoContainer">
          <div className="w-full ">
            <Tab.Group>
              <Tab.List className="flex w-full">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-40 rounded-t-sm py-2.5 text-sm font-medium leading-5",
                      "focus:outline-none",
                      selected ? "bg-gray-700 " : " hover:bg-white/[0.12]"
                    )
                  }
                >
                  Temperature
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-40 rounded-t-sm py-2.5 text-sm font-medium leading-5",
                      "focus:outline-none",
                      selected ? "bg-gray-700 " : " hover:bg-white/[0.12]"
                    )
                  }
                >
                  Power
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "w-40 rounded-t-sm py-2.5 text-sm font-medium leading-5",
                      "focus:outline-none",
                      selected ? "bg-gray-700 " : " hover:bg-white/[0.12]"
                    )
                  }
                >
                  Usage
                </Tab>
              </Tab.List>
              <Tab.Panels className="bg-gray-700 rounded-b-sm rounded-tr-sm">
                <Tab.Panel>
                  <TemperatureChart />
                </Tab.Panel>
                <Tab.Panel>tab 2</Tab.Panel>
                <Tab.Panel>tab 3</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
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
