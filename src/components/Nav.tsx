import Link from 'next/link';



export const Nav = () => {
    return (
        <>
            <div className="py-12 px-10 w-1/6 h-full text-center text-gray-500">
                <ul className='h-[95%] w-full'>
                    <Link href="/" className='w-full'><li className='border border-x-0 border-t-0 my-3 border-gray-500 hover:border-white hover:text-white'>HOME</li></Link>
                    <li className='border border-x-0 border-t-0 my-3 border-gray-500 hover:border-white hover:text-white'><Link className='' href="/devices"><span className='w-full'>MOON UNITS</span></Link></li>
                </ul>
                <ul className=''>
                    <li className='border border-x-0 border-t-0 border-gray-500 hover:border-white hover:text-white'><Link href="/login">LOG OUT</Link></li>
                </ul>
            </div>
            
        </>

    )
}