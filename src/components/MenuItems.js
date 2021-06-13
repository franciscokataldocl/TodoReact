import React from 'react'

const MenuItems = () => {
    return (
        <>
        <div className="row d-flex justify-content-center align-items-center">
            <article>
                <ul className="list-menu d-flex justify-content-between align-items-center py-2">
                    <li className="px-4 animate active-menu">Todas</li>
                    <li className="px-4 animate">Completadas</li>
                    <li className="px-4 animate">Pendientes</li>
                </ul>
            </article>
        </div>
        <hr/>
        </>
    )
}

export default MenuItems
