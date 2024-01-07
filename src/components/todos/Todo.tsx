// Todo.tsx
import React, { useState } from 'react';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';
import { BsThreeDots } from 'react-icons/bs';
import Modal from './Modal';
import { useTask } from '@/context/TaskContext';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TodoProps } from '../interfaces';

const Todo = ({ task }: TodoProps) => {
  const { taskDone } = useTask();
  const [hoveredTask, setHoveredTask] = useState<string | null>(null);
  const [modalTaskId, setModalTaskId] = useState<string | null>(null);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const setModal = (taskId: string) => {
    setModalTaskId(taskId);
  };

  const closeModal = () => {
    setModalTaskId(null);
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div
      key={task.id}
      className='flex flex-row items-center relative hover:bg-gray-200 hover:cursor-pointer rounded pl-3'
      onMouseEnter={() => setHoveredTask(task.id)}
      onMouseLeave={() => setHoveredTask(null)}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div className='mr-2' onClick={() => taskDone(task.id)}>
        {task.done ? (
          <ImCheckboxChecked color='#0C66E5' />
        ) : (
          <ImCheckboxUnchecked color='#626F86' />
        )}
      </div>
      <div className='py-1 mr-3'>
        <h3 className='text-info hover:underline'>{task.name}</h3>
      </div>
      {hoveredTask === task.id && (
        <div className='bg-white hover:bg-gray-300 ml-3 flex justify-center rounded w-6 h-6'>
          <button
            className=''
            onClick={() => {
              if (modalTaskId === task.id) {
                closeModal();
              } else {
                setModal(task.id);
              }
            }}
          >
            <BsThreeDots color='#172B4D' />
          </button>
          {modalTaskId === task.id && <Modal taskId={task.id} closeModal={closeModal} />}
        </div>
      )}
    </div>
  );
};

export default Todo;
