// EX 1

import React from 'react';
import { Link } from 'react-router-dom';

export default () => (

    <div className="testContainer">
        <div className="sidebar">
            <div className="logo">Awesome<span>Portofolio</span></div>
            <nav>
                <Link to="/admin">Home</Link>
                <Link to="/admin">About</Link>
                <Link to="/admin">Portofolio</Link>
                <Link to="/admin">Contact</Link>
            </nav>
        </div>

        <div className="main-content">
            <div className="portofolio">
                <div className="portofolio-item square">one</div>
                <div className="portofolio-item large-square">two</div>
                <div className="portofolio-item square">three</div>
                <div className="portofolio-item small-square">four</div>
                <div className="portofolio-item tall">five</div>
                <div className="portofolio-item wide">six</div>
            </div>
        </div>

    </div>

)
