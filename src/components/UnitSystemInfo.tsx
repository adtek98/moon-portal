import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"


export const UnitSystemInfo = ({unit}) => {
    return (
        <>
          <div className='px-2 py-3 bg-gray-600 p-1 rounded rounded-xl'>
            <div className='font-bold text-xl mb-3 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end'>
              <h1 className='mr-4'>SYSTEM INFO</h1>
              <Link href='/unit/[serialnumber]/edit' as={`/unit/${unit.serialNumber}/edit`} className='text text-gray-500 hover:text-white text-2xl'><FontAwesomeIcon icon={faPenToSquare} /></Link>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 text-sm'>
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
              <div>
                <p className='font-thin text-sm mx-2 mb-px'>Registered:</p>
                <div className='bg-gray-700 h-10 rounded rounded-xl flex items-center'>
                  <p className='font-semibold mx-2'>{unit.registered}</p>
                </div>
              </div>
              <div>
                <p className='font-thin text-sm mx-2 mb-px'>SerialNumber:</p>
                <div className='bg-gray-700 h-10 rounded rounded-xl flex items-center'>
                  <p className='font-semibold mx-2'>{unit.serialNumber}</p>
                </div>
              </div>
              <div>
                <p className='font-thin text-sm mx-2 mb-px'>Firmware:</p>
                <div className='bg-gray-700 h-10 rounded rounded-xl flex items-center'>
                  <p className='font-semibold mx-2'>{unit.firmware}</p>
                </div>
              </div>
              <div>
                <p className='font-thin text-sm mx-2 mb-px'>EyesSerial:</p>
                <div className='bg-gray-700 h-10 rounded rounded-xl flex items-center'>
                  <p className='font-semibold mx-2'>{unit.eyesSerial}</p>
                </div>
              </div>
            </div>           
          </div>         
        </>

    )
}