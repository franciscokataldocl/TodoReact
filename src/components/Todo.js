import React from 'react'

const Todo = ({text}) => {
    return (
        <>
           <div className="card animate mb-4 overflow-hidden">
            <div className="card-body" >
            <div className="row">
              <div className="col-lg-9 col-md-9 col-sm-12  px-4 py-3 d-flex align-items-center">
                <p className="m-0">{text}</p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 button-action-container d-flex justify-content-center align-items-center">
                <ul className="button-actions m-0">
                  <li className="delete animate"><ion-icon name="trash"></ion-icon></li>
                  <li className="complete animate"><ion-icon name="checkmark"></ion-icon></li>
                </ul>
              </div>
            </div>
          </div>
          </div>
          
   
        </>
    )
}

export default Todo
