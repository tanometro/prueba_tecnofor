import React from 'react';
import { ModalProps } from '../interfaces';
import { useTask } from '@/context/TaskContext';

function Modal(props: ModalProps) {
  const { deleteTodo } = useTask();
  const { taskId, closeModal } = props;

  return (
    <div className='bg-white rounded shadow absolute ml-28 py-2'>
      <button
        onClick={() => {
          deleteTodo(taskId);
          closeModal(); 
        }}
        className='text-info text-sm hover:bg-gray-100 py-1 px-2 w-full'
      >
        Eliminar
      </button>
    </div>
  );
}

export default Modal;