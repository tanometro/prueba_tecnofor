import React from 'react';
import { TitleProps } from './interfaces';

const TitleList = (props: TitleProps) => {
const {title, img, alt} = props;
  
  return (
    <div>
      <div className='flex items-center w-full mb-3 pl-3'>
        <img src={img} alt={alt} className='w-6 h-6 mr-2'/>
        <h3 className='text-gray-700 text-xl font-semibold'>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default TitleList;