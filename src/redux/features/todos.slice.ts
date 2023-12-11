import { createSlice } from "@reduxjs/toolkit";
import { TodosState } from "@/components/interfaces";

const initialState: TodosState = {
    allTodos: [],
    finishedTodos: [],
    deletedTodos: [],
}

export const todosSlice = createSlice({
    name: 'finished',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.allTodos.push(action.payload);
        },
        finishedTodo: (state, action) => {
            const todoId = action.payload;
            const todoIndex = state.allTodos.findIndex(todo => todo.id === todoId);
      
            if (todoIndex !== -1) {
              const todo = state.allTodos[todoIndex];
    
              if (state.finishedTodos.some(ftodo => ftodo.id === todo.id)) {
                state.finishedTodos = state.finishedTodos.filter(ftodo => ftodo.id !== todo.id);
              } else {
                state.finishedTodos.push(todo);
              }
              state.allTodos[todoIndex].done = !todo.done;
            }
          },
          deleteTodo: (state, action) => {
            const todoId = action.payload;
            const todoIndex = state.allTodos.findIndex(todo => todo.id === todoId);
      
            if (todoIndex !== -1) {
              const deletedTodo = state.allTodos.splice(todoIndex, 1)[0];
              state.deletedTodos.push(deletedTodo);
            }
          },
    },
  });

export const {addTodo, finishedTodo, deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;