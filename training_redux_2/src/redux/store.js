import todosReducer from './todos/todos-reducer';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
const store = configureStore({
  reducer: { todos: todosReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
