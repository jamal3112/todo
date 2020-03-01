import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <NavLink to='/'>Список дел</NavLink>
            <NavLink to='/add'>Добавление дела</NavLink>
        </div>
    )
}

export default Navigation;
