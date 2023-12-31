'use client';

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import TitleList from '@/components/lists/TitleList';
import List from '@/components/lists/List';
import { useTask } from '@/context/TaskContext';
import { TodoInterface } from '@/components/interfaces';
import NoTodo from '../../components/todos/NoTodo';

const Finalizadas = () => {

  const {todos} = useTask();

  const finished = todos.filter((task: TodoInterface) => task.done == true);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="w-5/12">
          <div className="w-full flex flex-col justify-start mt-24">
            <div className='flex w-full justify-between'> 
              <TitleList title="Tareas completadas HOY" img="/check.png" alt="check done" />
            </div>
            {
              finished.length === 0 ? 
              <NoTodo text='No tenes ninguna tarea completada aún por hoy // ¡Volve por más!'/>
                : 
              <List todo={finished} />
            }
          </div>
        </div>
      </div>
    </div>

  );
};

export default Finalizadas;