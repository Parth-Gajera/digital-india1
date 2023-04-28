import { useState, useEffect } from "react";

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Nav = () => {
    const [activeLink, setActiveLink] = useState('notactive');

    const handleLinkClick = (active) => {
        setActiveLink(active);
    };

    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        const scrollPosition = window.pageYOffset;
  
        sections.forEach((section, index) => {
          const top = section.offsetTop;
          const height = section.offsetHeight; 
  
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(index);
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  


    return (
        <div className="container-fluid" id="Nav">

            <nav className="navbar navbar-expand-md container nav">

                <div>
                    <Link className="navbar-brand" to='#Home'><span className='brand'><span className="blue">Dig</span>India</span></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 tabs">
                    <li className={activeSection === 0 ? "active" : ""}>
                            <HashLink
                                to="#Home"
                                onClick={() => handleLinkClick('Home')}
                                className={activeLink === 'Home' ? 'active' : 'notactive'}
                            >
                                Home
                            </HashLink>
                        </li>
                        <li className={activeSection === 1 ? "active" : ""}>
                            <HashLink
                                to="#Features"
                                onClick={() => handleLinkClick('Features')}
                                className={activeLink === 'Features' ? 'active' : 'notactive'}
                            >
                                Features
                            </HashLink>
                        </li>

                        <li className={activeSection === 2 ? "active" : ""}>
                            <HashLink
                                to="#Portfolio"
                                onClick={() => handleLinkClick('Portfolio')}
                                className={activeLink === 'Portfolio' ? 'active' : 'notactive'}
                            >
                                Portfolio
                            </HashLink>
                        </li>
                        <li className={activeSection === 3 ? "active" : ""}>
                        <HashLink
                                to="#Register"
                                onClick={() => handleLinkClick('Register')}
                                className={activeLink === 'Register' ? 'active' : 'notactive'}
                            >
                                Register
                            </HashLink>
                          
                        </li>
                        <li className="nav-item">
                        <HashLink
                                to="#Team"
                                onClick={() => handleLinkClick('Team')}
                                className={activeLink === 'Team' ? 'active' : 'notactive'}
                            >
                               Team
                            </HashLink>
                           
                        </li>
                        <li className="nav-item">
                        <HashLink
                                to="#Services"
                                onClick={() => handleLinkClick('Services')}
                                className={activeLink === 'Services' ? 'active' : 'notactive'}
                            >
                               Services
                            </HashLink>
                           
                        </li>
                        <li className="nav-item">
                        <HashLink
                                to="#Blog"
                                onClick={() => handleLinkClick('Blog')}
                                className={activeLink === 'Blog' ? 'active' : 'notactive'}
                            >
                               Blog
                            </HashLink>
                            
                        </li>
                        <li className="nav-item">
                        <HashLink
                                to="#Pricing"
                                onClick={() => handleLinkClick('Pricing')}
                                className={activeLink === 'Pricing' ? 'active' : 'notactive'}
                            >
                                Pricing
                            </HashLink>
                            {/* <HashLink className="nav-link" to='#Pricing'>Pricing</HashLink> */}
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn1">Contact us</button>
                        </li>
                    </ul>
                </div>


            </nav >

        </div >
    )
}

export default Nav;