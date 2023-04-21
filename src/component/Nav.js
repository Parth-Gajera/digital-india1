import React from 'react'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// jquery('.menu li').click(function () {
//     jquery('.menu li').not(this).removeClass('active');
//     jquery(this).addClass('active');
// });

const Nav = ()=> {


    return (
        <div className="container-fluid" id="Nav">

            <nav className="navbar navbar-expand-md container nav">

                <div>
                    <Link className="navbar-brand" to='#Home'><span className='brand'>Dig</span>India</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 tabs">
                        <li className="nav-item">
                            <HashLink className="nav-link" to="#Home">Home</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to='#Features'>Features</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to='#Portfolio'>Portfolio</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to='#Register'>Register</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to='#Team'>Team</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to='#Blog'>Blog</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to='#Services'>Services</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to='#Pricing'>Pricing</HashLink>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn1">Contact us</button>
                        </li>
                    </ul>
                </div>


            </nav>

        </div>
    )
}

export default Nav