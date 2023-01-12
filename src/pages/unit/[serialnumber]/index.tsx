import { GetServerSideProps, GetStaticProps } from 'next';
import {PortalLayout} from '../../../components/PortalLayout'



export default function Unit() {
  return (
    <>
      <PortalLayout>
        <div className='titleContainer border border-gray-500 border-x-0 border-t-0'>
          <h1 className='text-3xl text-bold font-bold mb-2'>Moon Unit</h1>
        </div>
        <div className='listContainer'>
          
        </div>
      </PortalLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3001/units/`);
  const units = await res.json();

  return{
    props: {
      units
    }
  }
}


