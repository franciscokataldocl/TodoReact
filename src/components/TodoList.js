import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filteredTodos }) => {

    return (

        <div className="row w-100 row-cards">


            {filteredTodos.map((todo) => {
                return <Todo
                    text={todo.text}
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                />
            })}


        </div>




    )
}

export default TodoList
