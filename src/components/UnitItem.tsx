import Link from 'next/link';

export const UnitItem = ({units}) => {
    return (
        <>

            {
            units.map((unit, index) => (
                <li key={index} className='w-full border border-gray-500 hover:border-white border-x-0 border-t-0 my-3 flex items-end justify-between'>
                    <div >
                        <p className='text-lg'>{unit.name}</p>
                        <p className='text-sm font-light'>Registered: {unit.registered}</p>
                        <p className='text-sm font-light'>SerialNumber: {unit.serialNumber}</p>
                    </div>
                    <Link href='/unit/[serialnumber]' as={`/unit/${unit.serialNumber}`} className='border border-gray-500 rounded w-24 h-10 my-auto text-center py-1 text-gray-500 hover:text-white hover:border-white'>Details</Link>
                </li>
            ))
            }
            
        </>

    )
}