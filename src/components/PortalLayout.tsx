import {Nav} from '../components/Nav';
import Link from 'next/link';

export const PortalLayout = ({children}) => {
    return (
        <>
            <div className='flex items-end h-[94%]'>
                <Nav/>
                <div className="bg-gray-700 rounded-tl-3xl py-12 px-28 w-5/6 h-full">
                    {children}
                </div>
            </div>
        </>

    )
}