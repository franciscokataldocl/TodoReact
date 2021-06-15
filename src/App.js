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
    getLocalTodos();
  }, [])

  useEffect(() => {
    //functions
    const filterHandler = () => {
      //console.log(status)
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

    //save to local
    const saveLocalTodos = () => {

      localStorage.setItem('todos', JSON.stringify(todos));

    }

    filterHandler();
    saveLocalTodos();
  }, [todos, status])




  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));

    } else {
      //localStorage.getItem('todos', JSON.stringify(todos));
      //obtengo lo que hay en el localstorage
      //json.parse convierte texto en objeto
      let todoFromLocal = JSON.parse(localStorage.getItem('todos'))
      //console.log(todoFromLocal)
      setTodos(todoFromLocal)

    }


  }





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
