import React, {useState, useRef} from 'react';
import Search from './search';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
const [color, setColor] = useState('gray-600');

const links = [
  {
    name: 'Tareas',
    href: '/'
  },
  {
    name: 'Finalizadas',
    href: '/finished'
  },
  {
    name: 'Eliminadas',
    href: '/deleted'
  },
]

  return (
    <div className='flex flex-row items-center pl-9 py-2.5 px-5 border-b border-gray-300 w-full'>
      <div className='w-1/12 mr-7 flex items-center justify-center'>
        <Image src='/buttons.png' width={16} height={16} alt='Menu icon' className=' mr-3' />
        <Image src='/logo.png' width={250} height={20} alt='Logo' className='mr-2' />
      </div>
    
    <nav className='flex justify-between items-center text-sm font-medium'>
      {
        links.map((link) => (
          <Link
          href={link.href}
          key={link.name}
          className={`text-${color} hover:bg-gray-200 rounded h-8 w-auto px-2 mr-2 flex items-center`}
          >
          {link.name}
          </Link>
        ))
      }
    </nav>
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