import React from 'react'

const Todo = ({ text, todo, todos, setTodos }) => {


  //functions

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed }
      }
      return item;
    }))

  };


  return (
    <>
      <div className="card animate mb-4 overflow-hidden">
        <div className="card-body" >
          <div className="row">
            <div className={`col-lg-9 col-md-9 col-sm-12  px-4 py-3 d-flex align-items-center ${todo.completed ? " bg-green" : ''}`}>
              <p className={`m-0 ${todo.completed ? "c-white" : ''}`}>{text}</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 button-action-container d-flex justify-content-center align-items-center">
              <ul className="button-actions m-0">
                <li onClick={deleteHandler} className="delete animate"><ion-icon name="trash"></ion-icon></li>
                <li onClick={completeHandler} className={`complete animate ${todo.completed ? "d-none" : ''}`}><ion-icon name="checkmark"></ion-icon></li>
              </ul>
            </div>
          </div>
        </div>
      </div >


    </>
  )
}

export default Todo
