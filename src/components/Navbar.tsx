import React from 'react'
import Logo from '../assets/react.svg'
const Navbar = () => (
    <>
        <nav className="navbar customNav">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src= {Logo} alt="Bootstrap" width="30" height="24"/>
                </a>
            </div>
        </nav>
    </>
);

export default Navbar
