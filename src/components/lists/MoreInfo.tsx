import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useTask } from '@/context/TaskContext';

function MoreInfo() {
    const {info, addInfo} = useTask();
    const [isActive, setIsActive] = useState(false);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        addInfo(e.target.value);
      };      

    return (
    <div className='border-div flex flex-col px-2 py-2'>
        <div className='flex items-center mb-2'>
            <div className='mr-2 hover:bg-gray-200 p-1'>
                {!isActive ? <IoIosArrowForward color='#626F86'
                onClick={() => setIsActive(!isActive)} /> 
                    : 
                <IoIosArrowDown color='#626F86'
                onClick={() => setIsActive(!isActive)}/> }
            </div>
            <div className='mr-1 '>
                ℹ️
            </div>
            <h3 className='text-gray-500 text-sm '>Más información</h3>
        </div>
        <div>
        {isActive && (
            <div>
                <input type='text' className='text-info outline-none' value={info} onChange={onChange}/>
            </div>
        )}
        </div>
    </div>
  )
};

export default MoreInfo;