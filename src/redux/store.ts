import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todos.slice';
import infoReducer from './features/info.slice';

export const store = configureStore({
    reducer: {
        todoReducer,
        infoReducer
    }
});

//Exporto tipos de datos que tengo en el estado
export type RootState = ReturnType<typeof store.getState>;

//Exporto una funcion con info de qué funciones puede ejecutar 
export type AppDispatch =  typeof store.dispatch