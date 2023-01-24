import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { PortalLayout } from "../../../components/PortalLayout";


export default function Unit({}) {
  return (
    <>
      <PortalLayout>
        <div className='titleContainer border border-gray-500 border-x-0 border-t-0 flex justify-between pb-2'>
          <h1 className='text-3xl font-bold'>{unit.name}</h1>
          <Link href='/devices' className='text-4xl text-gray-500 hover:text-white'><FontAwesomeIcon icon={faArrowLeftLong} /></Link>
        </div>
       
      </PortalLayout>
    </>
  )
}