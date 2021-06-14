import React from 'react'

const MenuItems = ({ setStatus }) => {




    const statusHandler = (e) => {

        setStatus(e.target.innerHTML)
        let menuItems = document.querySelectorAll('.menu-item');


        for (let i = 0; i < menuItems.length; i++) {

            if (menuItems[i] !== e.target) {
                menuItems[i].classList.remove('active-menu')
            }
        }
        e.target.classList.add('active-menu');


    }
    return (
        <>
            <div className="row d-flex justify-content-center align-items-center">
                <article>

                    <ul className="list-menu d-flex justify-content-between align-items-center py-2">
                        <li onClick={statusHandler} className="px-4 animate menu-item active-menu">Todas</li>
                        <li onClick={statusHandler} className="px-4 animate menu-item">Completadas</li>
                        <li onClick={statusHandler} className="px-4 animate menu-item ">Pendientes</li>
                    </ul>
                </article>
            </div>
            <hr />
        </>
    )
}

export default MenuItems
