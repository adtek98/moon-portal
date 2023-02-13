import {Nav} from '../components/Nav';
import Link from 'next/link';

export const PortalLayout = ({children}) => {
    return (
        <>
            <div className='flex h-[94%] max-h-[94%]'>
                <Nav/>
                <div className="bg-gray-700 lg:rounded-tl-3xl py-4 px-3 lg:py-12 lg:px-10 lg:w-5/6 w-full">
                    {children}
                </div>
            </div>
        </>

    )
}