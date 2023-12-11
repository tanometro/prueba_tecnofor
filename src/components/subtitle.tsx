import React from 'react';
import { SubProps } from './interfaces';

function Subtitle(props: SubProps) {
    const {text} = props;
  return (
    <div className='w-full mb-3 pl-3'>
        <h2 className='text-gray-500 text-sm'>
            {text}
        </h2>
    </div>
  )
}

export default Subtitle