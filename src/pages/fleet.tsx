import { GetStaticProps } from "next";
import TitleContainer from "../components/TitleContainer";
import { UnitContainer } from "../components/UnitContainer";

export default function Fleet({ units }) {
  const title = "Fleet";
  return (
    <>
      <TitleContainer title={title} children={undefined}></TitleContainer>
      <UnitContainer units={units} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/units/");
  const units = await res.json();

  return {
    props: {
      units,
    },
  };
};
