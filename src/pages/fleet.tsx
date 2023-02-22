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
  const res = await fetch("https://63c5ab2bf80fabd877edd241.mockapi.io/units");
  const units = await res.json();

  return {
    props: {
      units,
    },
  };
};
