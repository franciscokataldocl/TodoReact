import React, { useState, useEffect } from 'react';
//components
import Form from './components/Form';
import MenuItems from './components/MenuItems';
import TodoList from './components/TodoList';

//estilos
import './Estilos.css';


function App() {


  //state for input text
  const [inputText, setInputText] = useState('');
  //state for todos (tareas)
  const [todos, setTodos] = useState([]);

  //state for filtering todos
  const [status, setStatus] = useState("all");

  //state for filters
  const [filteredTodos, setFilteredTodos] = useState([]);



  useEffect(() => {
    //functions
    const filterHandler = () => {
      console.log(status)
      switch (status) {
        case 'Completadas':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'Pendientes':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos)
          break;
      }
    }

    filterHandler();
  }, [todos, status])





  return (
    <div className="container bg-white container-app shadow-app">

      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}

      />
      <MenuItems
        setStatus={setStatus}

      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />

    </div>
  );
}

export default App;
