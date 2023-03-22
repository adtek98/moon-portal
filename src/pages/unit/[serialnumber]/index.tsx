import Link from "next/link";
import { GetServerSideProps, GetStaticPaths } from "next";
import UnitBillingData from "../../../components/UnitInfoComponents/UnitBillingData";
import UnitSystemInfo from "../../../components/UnitInfoComponents/UnitSystemInfo";
import UnitUserData from "../../../components/UnitInfoComponents/UnitUserData";
import UnitSupport from "../../../components/UnitInfoComponents/UnitSupport";
import TitleContainer from "../../../components/TitleContainer";
import UnitMetaData from "../../../components/UnitInfoComponents/UnitMetaData";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

export default function Unit({ unit }) {
  return (
    <>
      <TitleContainer title={"Unit - " + unit.name}>
        <Link href="/fleet" className="text-4xl text-gray-500 hover:text-white">
          <ArrowLongLeftIcon className="w-12 h-12" />
        </Link>
      </TitleContainer>
      <div className="grid md:grid-cols-4 lg:grid-cols-4 lg:grid-rows-3 gap-5 h-full">
        <UnitSystemInfo unit={unit} />
        <UnitSupport unit={unit} />
        <UnitMetaData />
        <UnitBillingData />
        <UnitUserData />
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
