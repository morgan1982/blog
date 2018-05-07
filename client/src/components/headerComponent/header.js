import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
class Header extends Component {


    render () {

        return (
                <header>
                <div className="logo">hello there</div>
                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/">Home</Link>
                        </li>
                        <li><a href="#">Categories</a></li>
                        <li>
                            <Link to="/Products">Products</Link>
                        </li>
                        <li className="last"><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>


        );
    }
}


export default Header;