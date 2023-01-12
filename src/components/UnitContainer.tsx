import { UnitItem } from './UnitItem';



export const UnitContainer = ({units}) => {
    return (
        <>
            <div className='listContainer w-full max-h-full p-4 overflow-auto'>
                <div className='flex w-5/6 mx-auto justify-between'>
                    <select defaultValue={'DEFAULT'} className='w-1/6 bg-gray-700 my-3 text-center border border-gray-500 border-x-0 border-t-0'>
                    <option value={'DEFAULT'} className='color'>SORT AFTER</option>
                    </select>
                    <input type="text" className='w-1/6 bg-gray-700 my-3 text-center border border-gray-500 border-x-0 border-t-0' placeholder='SEARCH' />
                </div>
                <ul className='w-5/6 mx-auto'>
                    <UnitItem units={units}/>
                </ul>
            </div>
            
        </>

    )
}