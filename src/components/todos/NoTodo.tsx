import React from 'react';
import { NoTodoProps } from '../interfaces';

function NoTodo(props: NoTodoProps) {
  const {text} = props;
  return (
    <div>
        <h3 className='text-info'>
          {text}
        </h3>
    </div>
  )
}

export default NoTodo;