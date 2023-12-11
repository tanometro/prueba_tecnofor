'use client';

import Navbar from '@/components/navbar';
import Add from '@/components/add';
import TitleList from '@/components/titleList';
import Subtitle from '@/components/subtitle';
import List from '@/components/list';
import MoreInfo from '@/components/moreInfo';
import HideItems from '@/components/buttons/hideItems';
import { useTask } from '@/context/TaskContext';
import { Todo } from '@/components/interfaces';
import { useState } from 'react';
import DeleteAll from '@/components/buttons/deleteAll';

export default function Home() {
  const [view, setView] = useState(false);
  const {todos} = useTask();

  const done = todos.filter((task: Todo) => task.done == true);
  const notDone = todos.filter((task: Todo) => task.done == false);

  return (
    <div className="App">
    <Navbar />
    <div className="w-full flex justify-center items-center mt-24">
      <div className="w-7/12 mx-auto">
        <div className='w-full mb-8'>
          <Add placeholder='Agrega las TecnoTareas de hoy'/>
        </div>
        <div className='w-full flex'>
          <TitleList title='¡Hoy!' img='/calendar.png' alt='calendar'/>
          <div className='ml-auto'>
            {
            view == false ? 
              <HideItems  view={view} setView={setView} title='Hide checked items'/> 
              : 
              <HideItems  view={view} setView={setView} title='Show checked items'/>
            }
          </div>
          <div>
            <DeleteAll />
          </div>  
        </div>
        <div className='w-full'>
          <Subtitle text='Inserta aquí las TecnoTareas que vas a realizar en el día de hoy // Pueden ser las de mañana también'/>
        </div>
        <div className='w-full mb-10'>
          {
          view == false ? 
            <List todo={todos}/> 
            : 
            <List todo={notDone}/>
          }
        </div>
        <div>
          <MoreInfo/>
        </div>
      </div>
    </div>
  </div>
  );
}
