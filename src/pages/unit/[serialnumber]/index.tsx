import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { GetServerSideProps, GetStaticPaths } from "next";
import UnitBillingData from "../../../components/UnitInfoComponents/UnitBillingData";
import UnitSystemInfo from "../../../components/UnitInfoComponents/UnitSystemInfo";
import UnitUserData from "../../../components/UnitInfoComponents/UnitUserData";
import UnitSupport from "../../../components/UnitInfoComponents/UnitSupport";
import TitleContainer from "../../../components/TitleContainer";
import UnitMetaData from "../../../components/UnitInfoComponents/UnitMetaData";

export default function Unit({ unit }) {
  return (
    <>
      <TitleContainer title={"Unit - " + unit.name}>
        <Link href="/fleet" className="text-4xl text-gray-500 hover:text-white">
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </Link>
      </TitleContainer>
      <div className="py-2 grid md:grid-cols-4 lg:grid-cols-4 lg:grid-rows-3 gap-5">
        <UnitSystemInfo unit={unit} />
        <UnitBillingData />
        <UnitUserData />
        <UnitSupport />
        <UnitMetaData />
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
