import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import TodosContext from './context';
import TodosReducer from './reducer';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(TodosReducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoForm />
      <TodoList />
    </TodosContext.Provider>
  )
}



ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  document.getElementById('root')
);
