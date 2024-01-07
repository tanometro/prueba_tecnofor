import React, { useState } from 'react';
import { AddProps, TodoInterface } from '../interfaces';
import { v4 as uuid } from 'uuid';
import { useTask } from '@/context/TaskContext';
import addValidations from '../validations/addValidations';

const Add: React.FC<AddProps> = ({ placeholder }) => {
  const { addTodo } = useTask();
  const [newTask, setNewTask] = useState<TodoInterface>({
    id: uuid(),
    name: '',
    done: false,
  });
  const [errorMessage, setErrorMessage] = useState('')

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask((prevTask) => ({ ...prevTask, [e.target.name]: e.target.value }));
    setErrorMessage('');
  };

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = addValidations(newTask.name);

    if (validationErrors.hasErrors) {
      setErrorMessage(validationErrors.description);
      return; 
    }

    addTodo(newTask);

    setNewTask({
      id: uuid(),
      name: '',
      done: false,
    });

    setErrorMessage(''); 
  };

  return (
    <div className='w-full'>
      <form onSubmit={addTask} style={{ position: 'relative' }}>
        <h1 className='text-gray-600 text-sm' style={{ position: 'absolute', top: '-20px' }}>
          {errorMessage}
        </h1>
        <input
          name='name'
          placeholder={placeholder}
          onChange={handleTaskChange}
          value={newTask.name}
          className='text-gray-700 text-left text-3xl w-full placeholder-field py-1 focus:outline-none overflow-hidden overflow-wrap break-word'
        />
      </form>
    </div>
  );
};

export default Add;