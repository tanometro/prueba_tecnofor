import React, { useState } from 'react';
import { AddProps, TodoInterface } from './interfaces';
import { v4 as uuid } from 'uuid';
import { useTask } from '@/context/TaskContext';

const Add: React.FC<AddProps> = ({ placeholder }) => {
  const { addTodo } = useTask();
  const [newTask, setNewTask] = useState<TodoInterface>({
    id: uuid(),
    name: '',
    done: false,
  });

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask((prevTask) => ({ ...prevTask, [e.target.name]: e.target.value }));
  };

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newTask.name.trim() !== '') {
      addTodo(newTask);
    }

    setNewTask({
      id: uuid(),
      name: '',
      done: false,
    });
  };

  return (
    <div className='w-full'>
      <form onSubmit={addTask}>
        <input
          name='name'
          placeholder={placeholder}
          onChange={handleTaskChange}
          value={newTask.name}
          className='text-gray-700 text-3xl w-full placeholder-field py-1 md:px-8 lg:px-12 xl:px-16 focus:outline-none overflow-hidden overflow-wrap break-word'
        />
      </form>
    </div>
  );
};

export default Add;

