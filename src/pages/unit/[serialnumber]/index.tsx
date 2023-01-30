import { faArrowLeftLong, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetServerSideProps, GetStaticPaths} from 'next';
import Link from 'next/link';
import {PortalLayout} from '../../../components/PortalLayout';
import { UnitSystemInfo } from '../../../components/UnitSystemInfo';


export default function Unit({unit}) {
  return (
    <>
      <PortalLayout>
        <div className='titleContainer border border-gray-500 border-x-0 border-t-0 flex justify-between pb-2'>
          <h1 className='text-3xl font-bold'>{unit.name}</h1>
          <Link href='/devices' className='text-4xl text-gray-500 hover:text-white'><FontAwesomeIcon icon={faArrowLeftLong} /></Link>
        </div>
        <div className='py-2 grid lg:grid-cols-3 sm:grid-cols-1 gap-5'>
          <UnitSystemInfo unit={unit}/>
          <div className='px-2 py-3 bg-gray-600 rounded-xl text-sm'>
            <div className='font-bold text-xl mb-3 mt-1 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end'>
              <h1 className=''>BILLING DATA</h1>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
              <div>
                <p className='font-thin text-sm mx-2 mb-px'>Days In Usage:</p>
                <div className='bg-gray-700 h-10 rounded rounded-xl flex items-center'>
                  <p className='font-semibold mx-2'>10 day/s</p>
                </div>
              </div>
              <div>
                <p className='font-thin text-sm mx-2 mb-px'>Total Uptime:</p>
                <div className='bg-gray-700 h-10 rounded rounded-xl flex items-center'>
                  <p className='font-semibold mx-2'>923 mins</p>
                </div>
              </div>
              <div>
                <p className='font-thin text-sm mx-2 mb-px'>Usage Styles:</p>
                <div className='bg-gray-700 h-10 rounded rounded-xl flex items-center'>
                  <p className='font-semibold mx-2'>???</p>
                </div>
              </div>
              <div>
                <p className='font-thin text-sm mx-2 mb-px'>Last Updated:</p>
                <div className='bg-gray-700 h-10 rounded rounded-xl flex items-center justify-between'>
                  <p className='font-semibold mx-2'>1998/12/01</p>
                  <Link href='/' className='bg-gray-800 h-full flex items-center rounded-r-xl hover:bg-gray-900'>
                    <p className='mx-3'>Details</p>
                  </Link>
                </div>
              </div>
            </div>           
          </div>
          <div className='px-2 py-3 bg-gray-600 rounded-xl text-sm'>
            <div className='font-bold text-xl mb-3 mt-1 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end'>
              <h1 className=''>SUPPORT</h1>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
              <div>
                <p className='font-thin text-sm mx-2 mb-px'>Health Status:</p>
                <div className='bg-gray-700 h-10 rounded rounded-xl flex items-center justify-between'>
                  <p className='font-semibold mx-2 text-green-500'>GOOD</p> 
                  <Link href='/' className='bg-gray-800 h-full flex items-center rounded-r-xl'>
                    <p className='mx-3'>Details</p>
                  </Link>
                </div>
              </div>
              <div>
                <p className='font-thin text-sm mx-2 mb-px'>Owner:</p>
                <div className='bg-gray-700 h-10 rounded rounded-xl flex items-center'>
                  <p className='font-semibold mx-2'>{unit.owner}</p>
                </div>
              </div>
            </div>           
          </div>
          <div className='px-2 py-3 bg-gray-600 rounded-xl text-sm'>
            <div className='font-bold text-xl mb-3 mt-1 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end'>
              <h1 className=''>USER DATA</h1>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
              <div>
                <p className='font-thin text-sm mx-2 mb-px'>Unit Name:</p>
                <div className='bg-gray-700 h-10 rounded rounded-xl flex items-center'>
                  <p className='font-semibold mx-2'>{unit.name}</p>
                </div>
              </div>
              <div>
                <p className='font-thin text-sm mx-2 mb-px'>Owner:</p>
                <div className='bg-gray-700 h-10 rounded rounded-xl flex items-center'>
                  <p className='font-semibold mx-2'>{unit.owner}</p>
                </div>
              </div>
            </div>           
          </div>
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


