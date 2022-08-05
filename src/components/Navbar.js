import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/fav.png'

import { useSelector } from 'react-redux'
function Navbar() {
    const [width, setWidth] = useState("container")
    const [margin, setMargin] = useState("mt-4")
    const home = useRef(null)

    const state = useSelector((state) => state.Cart.countElement)
    window.onscroll = () => {
        if (window.scrollY >= 120) {
            setWidth("container-fluid")
            setMargin("margin")
        }
        else {
            setWidth("container")
            setMargin("mt-4")
        }
    }
    useEffect(() => {
        home.current.click()
    }, [])
    return (

        <nav className={` navbar-expand-lg navbar-light w-100 ${margin} p-0  navbar`} >
            <div className={`${width} bg-light p-3  `} >
                <Link to="/" className="navbar-brand" > <img src={logo} alt="logo" />  Shopping </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" ref={home}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cartsection">
                                <i className="fa-solid fa-cart-shopping "><span className="count">{state}</span></i>
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    );
}

export default Navbar;
