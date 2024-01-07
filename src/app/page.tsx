'use client';

import React, {useState } from 'react';
import TitleList from '@/components/lists/TitleList';
import Subtitle from '@/components/lists/Subtitle';
import List from '@/components/lists/List';
import MoreInfo from '@/components/lists/MoreInfo';
import { useTask } from '@/context/TaskContext';
import { TodoInterface } from '@/components/interfaces';
import Navbar from '@/components/navbar/Navbar';
import Add from '../components/Add';
import DeleteAll from '../components/buttons/DeleteAll';
import HideItems from '../components/buttons/HideItems';

export default function Home() {
  const [view, setView] = useState(false);
  const {todos, setTodos} = useTask();

  const notDone = todos.filter((task: TodoInterface) => task.done == false);
  
  return (
    <div className="App">
      <Navbar/>
        <div className="w-full flex justify-center items-center mt-24">
          <div className="w-7/12 ">
            <div className='w-full mb-8'>
              <Add placeholder='Agrega las TecnoTareas de hoy'/>
            </div>
            <div className='w-full flex'>
              <TitleList title='¡Hoy!' img='/calendar.png' alt='calendar'/>
                <div className='ml-auto'>
                  {
                  view == false ? 
                    <HideItems view={view} setView={setView} title='Hide checked items'/>
                    : 
                    <HideItems  view={view} setView={setView} title='Show checked items'/>
                  }
                </div>
                <div>
                  <DeleteAll/>
                </div>  
              </div>
              <div className='w-full'>
                <Subtitle text='Inserta aquí las TecnoTareas que vas a realizar en el día de hoy // Pueden ser las de mañana también'/>
              </div>
            <div className='w-full mb-10'>
              {
              view == false ? 
                <List todo={todos} setTodos={setTodos} /> 
                : 
                <List todo={notDone} setTodos={setTodos}/>
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
