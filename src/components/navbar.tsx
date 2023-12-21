import React from 'react';
import { useRouter } from 'next/navigation';
import Search from './search';
import Image from 'next/image';

function Navbar() {
const router = useRouter();
const widthValue = '91%';
const heightValue = 'auto'; 


  return (
    <div className='flex flex-row items-center pl-9 py-2.5 px-5 border-b border-gray-300 w-full'>
      <div className='w-1/12 mr-7 flex items-center justify-center'>
        <Image src='/buttons.png' width={16} height={16} alt='Menu icon' className=' mr-3' />
        <Image src='/logo.png' width={250} height={20} alt='Logo' className='mr-2' />
      </div>
    <div className='flex justify-between items-center text-sm font-medium'>
      <button onClick={() => router.push('/')} className='text-gray-600 hover:bg-gray-200 rounded h-8 w-auto px-1 mr-2'>Tareas</button>
      <button onClick={() => router.push('/finished')} className='text-gray-600 hover:bg-gray-200 rounded h-8 w-auto px-1 mr-2'>Finalizadas</button>
      <button onClick={() => router.push('/deleted')} className='text-gray-600 hover:bg-gray-200 rounded h-8 w-auto px-1 mr-2'>Eliminadas</button>
      <button onClick={() => router.push('/')} className='bg-blue-600 hover:bg-blue-700 rounded h-8 w-auto px-3'>Crear</button>
    </div>
    <div className='ml-auto flex items-center align-middle w-12/12'>
      <Search/>
      <div className='bg-white p-1 rounded-full hover:bg-gray-300'>
        <img src='http://github.com/tanometro.png' className='w-7 h-7 rounded-full' />
      </div>
    </div>
  </div>

  );
}

export default Navbar;