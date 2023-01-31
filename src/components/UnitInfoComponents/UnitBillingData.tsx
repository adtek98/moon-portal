import Link from "next/link"


export const UnitBillingData = () => {
    return (
        <>
        <div className='px-2 py-5 bg-gray-600 rounded-xl text-sm col-span-4 lg:col-span-2'>
            <div className='font-bold text-xl mb-3 mt-1 border border-gray-500 border-x-0 border-t-0 flex justify-between items-end'>
              <h1 className=''>BILLING DATA</h1>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
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
                    <p className='mx-6'>Details</p>
                  </Link>
                </div>
              </div>
            </div>           
        </div>       
        </>

    )
}