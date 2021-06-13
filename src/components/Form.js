import React from 'react'

const Form = ({inputText,setInputText, todos, setTodos} ) => {

    //functions-----------------------------------------------------------

    //function for inputText
    const inputTextHandler = (e)=>{
        //pasamos el valor del input al prop setinputtext que corresponde
        //al manejador de estado de app.js
        setInputText(e.target.value);
    }

    //function for submit (add todo)
    const submitTodoHandler = (e)=>{
        e.preventDefault();
        //setTodos es un arreglo vacio al inicio (app.js estado)
       if(inputText !== ''){
        AddTodo()
       }
        //vaciar input luego de agregar
        setInputText('');
        
    }


    //crear arreglo con todo nuevo
    const AddTodo = ()=>{
        setTodos([
            //hacemos un spread de todos, que seria.. toma todo lo que haya en todos
            //y agregale un nuevo objeto con lo que tiene el input, 
            //con la propiedad completed en false por default
            // y el id que sea la fecha exacta en que se hizo click al boton agregar
            //todo esto al dar click en agregar
            ...todos,{
                text:inputText, 
                completed:false,
                id: Date.now()
             }
        ]);
    }


    return (
        <div className="row bg-blue p-4 d-flex justify-content-center">
        <div className="col ">
          <form >
            <div className="form-group m-0">
              <input onChange={inputTextHandler} 
              //value input text toma el estado de input
              //lo vacia, despues de dar click en add
              value={inputText}
              type="text" 
              className="form-control input-todo" 
              placeholder="Agrega una tarea"/>
            </div>
        <button onClick={submitTodoHandler} 
        className="plus-button animate shadow-1 d-flex justify-content-center align-items-center"><ion-icon name="add"></ion-icon></button>
          </form>
        </div>
      </div>
    )
}

export default Form
