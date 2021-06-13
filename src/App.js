import React, {useState} from 'react';
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


  return (
    <div className="container bg-white container-app shadow-app">

      <Form 
      inputText={inputText}
      setInputText={setInputText} 
      todos={todos}
      setTodos={setTodos}
      />
      <MenuItems />
      <TodoList 
      todos={todos}
      />
     
    </div>
  );
}

export default App;
