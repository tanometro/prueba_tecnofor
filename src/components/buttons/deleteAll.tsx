import React from 'react';
import { useTask } from '@/context/TaskContext';
import { TodoInterface } from '../interfaces';

function DeleteAll() {

    const {todos, deleteTodos} = useTask();
    const doneIds = todos.filter((task: TodoInterface) => task.done).map((task:TodoInterface) => task.id);

  return (
    <div>
        <button 
        onClick={() => deleteTodos(doneIds)}
        className='text-gray-600 font-medium hover:bg-gray-200 rounded h-8 w-auto px-1 mr-2'
        >
            Delete all tasks
        </button>
    </div>
  )
}

export default DeleteAll;