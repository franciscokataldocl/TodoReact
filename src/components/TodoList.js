import React from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {

    return (

        <div className="row w-100 row-cards">

            
            {todos.map((todo)=>{
                return <Todo text={todo.text} key={todo.id}/>
            })}
            

            </div>
  


        
    )
}

export default TodoList
