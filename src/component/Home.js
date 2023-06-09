import React from 'react'

import hero from '../img/hero.jpg'
import hicon1 from '../img/hicon1.png'
import hicon2 from '../img/hicon2.png'
import hicon3 from '../img/hicon3.png'
import partner1 from '../img/partner1.png'
import partner2 from '../img/partner2.png'
import partner3 from '../img/partner3.png'
import partner4 from '../img/partner4.png'
import partner5 from '../img/partner5.png'
import Nav from '../component/Nav'
import Features from './Features'
import Portfolio from './Portfolio'
import Register from './Register'
import Team from './Team'
import Services from './Services'
import Blog from './Blog'
import Pricing from './Pricing'
import Contact from './Contact'









const Home = () => {
    return (

        <>
            <Nav />



            <section id="Home">
                <div className="container-fluid home" >
                    <span className='hero-img'>
                        <img src={hero} alt='' className='hero' />
                    </span>
                    <div className="container">
                        <div className="row r1">
                            <div className="col-lg-6 col-md-8 col-sm-8 col-8">
                                <h1 className='mainhead'>Ready To Promote Your New Business With DigIndia </h1>
                                <ul className='hero-text'>

                                    <li className='hero-list'>
                                        <span className="hicon"><img src={hicon1} alt="" width='100%' /></span>
                                        <p className='htext'>Tendis tempor ante acu ipsum finibus, et atimus etims urna netsumiteda qui ratione lorem nets et sequi tempor.</p>
                                    </li>

                                    <li className='hero-list'>
                                        <span className="hicon"><img src={hicon2} alt="" width='100%' /></span>
                                        <p className='htext'> Neque tempor ante acu ipsum nis finibus, atime quiamis ets netsumiteda qui tempor magni ets ipsum finibus.</p>
                                    </li>

                                    <li className='hero-list'>
                                        <span className="hicon"><img src={hicon3} alt="" width='100%' /></span>
                                        <p className='htext'>  Etiam tempor ante acu ipsum net finibus, atimus veilite nis netsumitedas qui tempor ratione estimat ipsum.</p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>



            </section>

            <div className="container-fluid r2">
                <div className="container">
                    <div className="sponsors">

                        <span className="partner"><img src={partner2} width='100%' alt="" /></span>
                        <span className="partner"><img src={partner1} width='100%' alt="" /></span>
                        <span className="partner"><img src={partner3} width='100%' alt="" /></span>
                        <span className="partner"><img src={partner4} width='100%' alt="" /></span>
                        <span className="partner"><img src={partner5} width='100%' alt="" /></span>

                    </div>
                </div>
            </div>


            <Features />
            <Portfolio />
            <Register />

            <Team />
            <Services />
            <Blog />
            <Pricing />
            <Contact />

        </>
    )
}

export default Home
