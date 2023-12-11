'use client';

import { createContext, useContext } from "react";
import {useLocalStorage} from '../hooks/useLocalstorage';

export const TaskContext = createContext();

export const useTask = () => {
    const context = useContext(TaskContext);
    if(!context) throw new Error('useTask debería estar siendo usando dentro de un provider');
    return context;
}

export const TaskProvider = ({children}) => {
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [deleted, setDeleted] = useLocalStorage('deleted', []);
    const [info, setInfo] = useLocalStorage('info', '');

    const addTodo = (task) => {
        setTodos([...todos, task]);
      };

    const addInfo = (text) => {
        setInfo(text);
    }

    const taskDone = (id) => {
        setTodos((prevTodos) =>
          prevTodos.map((task) =>
            task.id === id ? { ...task, done: !task.done } : task
          )
        );
      };
      
    const addDeletedTask = (task) => {
        setDeleted([...deleted, task]);
    };

    const deleteTodo = (id) => {
        const deletedTask = todos.find(task => task.id === id);

        if (deletedTask) {
            addDeletedTask(deletedTask);
            setTodos(
                todos.filter(task => task.id !== id)
            );
        }
    };

    const deleteTodos = (ids) => {
        const deletedTasks = todos.filter(task => ids.includes(task.id));
    
        if (deletedTasks.length > 0) {
            setDeleted(prevDeleted => [...prevDeleted, ...deletedTasks]);
            setTodos(prevTodos => prevTodos.filter(task => !ids.includes(task.id)));
        }
    };

    return <TaskContext.Provider value={{
        todos,
        addTodo,
        taskDone,
        deleted,
        deleteTodo,
        deleteTodos,
        info,
        addInfo
    }}>
        {children}
    </TaskContext.Provider>
}
