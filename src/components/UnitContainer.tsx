import { UnitItem } from './UnitItem';

export const UnitContainer = ({units}) => {
    return (
        <>
        <div className='lg:w-10/12 mx-auto max-h-full overflow-auto'>
            <div className='flex justify-between lg:p-3'>
                <select defaultValue={'DEFAULT'} className='noob lg:w-1/6 bg-gray-700 my-3 text-center border border-gray-500 border-x-0 border-t-0'>
                    <option value={'DEFAULT'} className=''>SORT AFTER</option>
                </select>
                <input type="text" className='lg:w-1/6 bg-gray-700 my-3 text-center border border-gray-500 border-x-0 border-t-0' placeholder='SEARCH' />
            </div>
            <div className='w-full lg:p-3 '>
                <ul className=' mx-auto'>
                    <UnitItem units={units}/>
                </ul>
            </div>
        </div>

            
        </>

    )
}