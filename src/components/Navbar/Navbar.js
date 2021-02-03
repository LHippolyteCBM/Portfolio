import React, { Component } from 'react';
import { FaHippo } from 'react-icons/fa';
import { MenuList } from './MenuList';


import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i><FaHippo /></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuList.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
    
            </nav>
        );
    };
};

export default Navbar;