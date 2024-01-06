import { useTask } from '@/context/TaskContext';
import React, { useState } from 'react';
import { TodoInterface } from '../interfaces';

function Search() {
  const { todos } = useTask();
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputClick = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={` flex ${isFocused ? 'border-blue-500' : 'border-gray-200'} border-2 rounded items-center align-middle mr-3 px-2 relative w-full`}>
      <img src='/search.png' alt='Search icon' className='w-3 h-3 items-center align-middle mr-3' />
      <input
        type="search"
        placeholder={isFocused ? "Search TecnoTodo-app" : "Buscar"}
        className={` placeholder-text h-7 pl-2 w-full outline-none text-black text-left transition-all duration-300${isFocused ? ' focus:w-96' : ''}`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onClick={handleInputClick}
        onBlur={handleInputBlur}
      />
    </div>
  );
}

export default Search;
