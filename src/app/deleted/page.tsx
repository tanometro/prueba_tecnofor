'use client';

import React from 'react';
import Navbar from '@/components/navbar';
import TitleList from '@/components/titleList';
import { TodoInterface } from '@/components/interfaces';
import NoTodo from '@/components/noTodo';
import { useTask } from '@/context/TaskContext';

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