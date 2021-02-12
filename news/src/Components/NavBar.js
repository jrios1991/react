import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">TEK News</a>
                <div className="navbar-collapse offcanvas-collapse row">
                    <ul className="list-unstyled navbar-nav">
                        <li className="col-s-3 list-group-item"><Link to="/sports">Sports</Link></li>
                        <li className="col-s-3 list-group-item"><Link to="/health">Health</Link></li>
                        <li className="col-s-3 list-group-item"><Link to="/technology">Technology</Link></li>
                        <li className="col-s-3 list-group-item"><Link to="/">Home</Link></li>
                    </ul>
                </div>
            </div>


        </nav>
    )
}

export default NavBar;