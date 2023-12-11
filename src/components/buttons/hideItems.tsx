import React from 'react';
import { HideProps } from '../interfaces';

function HideItems(props: HideProps) {

    const {view, setView, title} = props;

    const hideDone = () => {
        setView(!view)
    }

  return (
    <div>
        <button
        onClick={hideDone}
        className='text-gray-600 font-medium hover:bg-gray-200 rounded h-8 w-auto px-1 mr-2'>
            {title}
        </button>
    </div>
  )
}

export default HideItems