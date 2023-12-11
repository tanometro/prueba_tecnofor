import React from 'react';
import { useRouter } from 'next/navigation';

function Navbar() {
const router = useRouter();

  return (
    <div className='flex flex-row items-center pl-9 py-3 px-5 border-b border-gray-300 w-full'>
    <div className='w-1/12 mr-7 flex items-center justify-center'>
      <img src='/buttons.png' alt='Menu icon' className='w-4 h-4 mr-3' />
      <img src='/logo.png' alt='Logo' className='w-11/12 h-2/12 mr-2' />
    </div>
    <div className='flex justify-between items-center text-sm font-medium'>
      <button onClick={() => router.push('/')} className='text-gray-600 hover:bg-gray-200 rounded h-8 w-auto px-1 mr-2'>Tareas</button>
      <button onClick={() => router.push('/finished')} className='text-gray-600 hover:bg-gray-200 rounded h-8 w-auto px-1 mr-2'>Finalizadas</button>
      <button onClick={() => router.push('/deleted')} className='text-gray-600 hover:bg-gray-200 rounded h-8 w-auto px-1 mr-2'>Eliminadas</button>
      <button onClick={() => router.push('/')} className='bg-blue-600 hover:bg-blue-700 rounded h-8 w-auto px-3'>Crear</button>
    </div>
    <div className='ml-auto flex items-center align-middle'>
      <div className="flex border-gray-200 border-2 rounded px-3 items-center align-middle mr-3">
        <img src='/search.png' alt='Search icon' className='w-3 h-3 items-center align-middle mr-3'/>
        <input
          type="search"
          placeholder="Buscar"
          className="placeholder-text h-7 w-40" 
        />
      </div>
      <div className='bg-white p-1 rounded-full hover:bg-gray-300'>
        <img src='http://github.com/tanometro.png' className='w-7 h-7 rounded-full' />
      </div>
    </div>
  </div>

  );
}

export default Navbar;