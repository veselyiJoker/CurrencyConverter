import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Converter</NavLink>
                    </li>
                    <li>
                        <NavLink to='/all-currencies'>All Currencies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
