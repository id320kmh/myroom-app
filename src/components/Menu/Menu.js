import React from 'react';
import {NavLink} from 'react-router-dom';

import './Menu.css';

function Menu() {

    return (
        <ul className="menu">
            <li className="menu-li">
                <NavLink to="/home">Home</NavLink>
            </li>
            <li className="menu-li">
                <NavLink to="/task">Task</NavLink>
            </li>
        </ul>
    )
}


export default Menu;

