import Link from "next/link"


export const UnitSupport = () => {
    return (
        <>
          <div className='px-2 py-5 bg-gray-600 rounded-xl text-sm col-span-4 lg:col-span-2'>
            <div className='font-bold text-xl mb-3 mt-1 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end'>
              <h1 className=''>SUPPORT</h1>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 lg:col-span-2'>
              <div>
                <p className='font-thin text-sm mx-2 mb-px'>Health Status:</p>
                <div className='bg-gray-700 h-10 rounded rounded-xl flex items-center justify-between'>
                  <p className='font-semibold mx-2 text-green-500'>GOOD</p> 
                  <Link href='/' className='bg-gray-800 h-full flex items-center rounded-r-xl hover:bg-gray-900 w-24'>
                    <p className='mx-6'>Details</p>
                  </Link>
                </div>
              </div>
              <div>
                <p className='font-thin text-sm mx-2 mb-px'>Support Data:</p>
                <div className='bg-gray-700 h-10 rounded rounded-xl flex items-center justify-between'>
                  <p className='font-semibold mx-2'>Logs</p> 
                  <Link href='/' className='bg-gray-800 h-full flex items-center rounded-r-xl hover:bg-gray-900 w-24'>
                    <p className='mx-6'>Details</p>
                  </Link>
                </div>
                <div className='mt-3 bg-gray-700 h-10 rounded rounded-xl flex items-center justify-between'>
                  <p className='font-semibold mx-2'>Metrics</p> 
                  <Link href='/' className='bg-gray-800 h-full flex items-center rounded-r-xl hover:bg-gray-900 w-24'>
                    <p className='mx-6'>Details</p>
                  </Link>
                </div>
              </div>
            </div>           
          </div>    
        </>

    )
}