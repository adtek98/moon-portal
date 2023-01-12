import { GetStaticProps} from 'next'
import {PortalLayout} from '../components/PortalLayout'
import {UnitContainer} from '../components/UnitContainer'




export default function Devices({units})  {
  return (
    <>
      
      <PortalLayout>
        <div className='titleContainer border border-gray-500 border-x-0 border-t-0'>
          <h1 className='text-3xl text-bold font-bold mb-2'>MOON UNITS</h1>
        </div>
        <UnitContainer units={units}/>
      </PortalLayout>
    </>
  )
}
  
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3001/units/');
  const units = await res.json();

  return{
    props: {
      units
    }
  }
}

