import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {


    render () {

        return (
                <header>
                <div className="logo">Pithikos ?</div>
                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Products">Products</Link>
                        </li>
                        <li>
                            <Link to="/Testing">Testing</Link>
                        </li>
                        <li>
                            <Link to="/Admin">Admin</Link>
                        </li>
                    </ul>
                </nav>
            </header>


        );
    }
}


export default Header;
