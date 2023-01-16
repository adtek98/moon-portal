import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GetServerSideProps, GetStaticPaths} from 'next';
import Link from 'next/link';
import {PortalLayout} from '../../../components/PortalLayout'


export default function Unit({unit}) {
  return (
    <>
      <PortalLayout>
        <div className='titleContainer border border-gray-500 border-x-0 border-t-0 flex justify-between'>
          <h1 className='text-3xl text-bold font-bold mb-2'>{unit.name}</h1>
          <Link href='/devices' className='text-4xl'><FontAwesomeIcon icon={faArrowLeftLong} /></Link>
        </div>
        <div className='listContainer'>
          <p>SerialNumber: {unit.serialNumber}</p>
          <p>Registered: {unit.registered}</p>
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


