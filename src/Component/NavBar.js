import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
class NavBar extends Component {
    
    render() {
        return (
           <nav>
            <NavLink to='/'>Home </NavLink>
            <NavLink to='/about'>About</NavLink>
           </nav>
        );
    }
}

export default NavBar;