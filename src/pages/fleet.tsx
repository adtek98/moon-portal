import { GetStaticProps} from 'next'
import {PortalLayout} from '../components/PortalLayout'
import {UnitContainer} from '../components/UnitContainer'




export default function Fleet({units})  {
  return (
    <>
      
      <PortalLayout>
        <div className='titleContainer border border-gray-500 border-x-0 border-t-0'>
          <h1 className='lg:text-3xl text-2xl text-bold font-bold mb-2'>FLEET MANAGMENT</h1> 
        </div>
        <UnitContainer units={units}/>
      </PortalLayout>
    </>
  )
}
  
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://63c5ab2bf80fabd877edd241.mockapi.io/units');
  const units = await res.json();

  return{
    props: {
      units
    }
  }
}

