// EX 1

import React from 'react';
import { Link } from 'react-router-dom';

export default () => (

    <div className="testContainer">

        <div className="sidebar">
            <div className="logo">Awesome<span>Portofolio</span></div>
            <nav>
                <Link className="nav-item" to="/admin">Home</Link>
                <Link className="nav-item" to="/admin">About</Link>
                <Link className="nav-item" to="/admin">Portofolio</Link>
                <Link className="nav-item" to="/admin">Contact</Link>
            </nav>
        </div>

        <div className="main-content">
            <div className="portofolio">
                <div className="portofolio-item medium">one</div>
                <div className="portofolio-item large two">two</div>
                <div className="portofolio-item medium">three</div>
                <div className="portofolio-item small">four</div>
                <div className="portofolio-item tall">five</div>
                <div className="portofolio-item wide">six</div>
            </div>
        </div>

    </div>

)

