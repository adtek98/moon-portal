import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetServerSideProps, GetStaticPaths } from "next";
import Link from "next/link";
import Loading from "../../../../components/Loading";
import { PortalLayout } from "../../../../components/PortalLayout";


export default function Edit({unit}) {
  return (
    <>
      <PortalLayout>
        <div className='titleContainer border border-gray-500 border-x-0 border-t-0 flex justify-between pb-2'>
          <h1 className='text-3xl font-bold'>EDIT {unit.name}</h1>
          <Link href='/unit/[serialnumber]' as={`/unit/${unit.serialNumber}`} className='text-4xl text-gray-500 hover:text-white'><FontAwesomeIcon icon={faArrowLeftLong} /></Link>
        </div>
      </PortalLayout>
    </>
  )
}


export const getStaticProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://63c5ab2bf80fabd877edd241.mockapi.io/units/${context.params.serialnumber}`);
  const unit = await res.json();
  return{
    props: {
      unit,
    },
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://63c5ab2bf80fabd877edd241.mockapi.io/units`);
  const units = await res.json();

  const paths = units.map(unit => {
    return {
      params: {
        serialnumber: unit.serialNumber.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}