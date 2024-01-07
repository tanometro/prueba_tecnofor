'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import TitleList from '@/components/lists/TitleList';
import { TodoInterface } from '@/components/interfaces';
import { useTask } from '@/context/TaskContext';
import NoTodo from '@/components/NoTodo';

const DeletedList = ( ) => {

  const {deleted} = useTask();


  return (
    <div>
      <Navbar/>
        <div className="flex-grow flex items-center justify-center">
          <div className="w-5/12 mt-24">
          <TitleList title="Tareas que eliminaste" img="/x.png" alt="deleted" />
          {
            deleted.length == 0 ? <NoTodo text='No tenes ninguna tarea eliminada // ¡Volve por más!'/>
              :
            deleted.map((task: TodoInterface) => (
              <div
                key={task.id}
                className='flex flex-row items-center relative hover:bg-gray-200 hover:cursor-pointer rounded pl-3'
                >
                <div className='py-1 mr-3'>
                  <h3 className='text-info hover:underline'>
                    {task.name}
                  </h3>
                </div>
              </div>
            ))
          } 
          
          </div>
        </div>
    </div>
  );
};

export default DeletedList;