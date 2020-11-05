import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const links = ['Home', 'Battle', 'Popular'];
    return (
        <ul className='nav'>
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink 
                        activeClassName='active' 
                        exact 
                        to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
                            {link}
                    </NavLink>
                </li> 
            )
            )}
        </ul>
    )
}

export default Nav;