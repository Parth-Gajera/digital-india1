import React from 'react'

import star from "../img/star .png"
import services1 from "../img/services1.png"
import sicon1 from "../img/sicon1.png"
import sicon2 from "../img/sicon2.png"
import sicon3 from "../img/sicon3.png"
import sicon4 from "../img/sicon4.png"
import sicon5 from "../img/sicon5.png"
import sicon6 from "../img/sicon6.png"
import partner1 from '../img/partner1.png'
import partner2 from '../img/partner2.png'
import partner3 from '../img/partner3.png'
import partner4 from '../img/partner4.png'
import partner5 from '../img/partner5.png'

const Services = () => {
    return (
        <section className="services container-fluid" id="Services">
            <div className="container">
                <h2 className='head2'>Amazing Services</h2>
                <div className="deco">
                    <span className="star"><img src={star} alt="" width="100%" /></span>
                </div>
                <p className='text-center' style={{ opacity: '.5', marginBottom: '50px' }}>There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration, by injected humour, or new randomised words.</p>
                <span className="services1"><img src={services1} alt="" width='100%' /></span>
                <div className="row r61">
                    <div className="col-md-4 scol">
                        <div className="sicon"><img src={sicon1} alt="" width="100%" /></div>
                        <div className="stext">
                            <h5>Top-Notch Design</h5>
                            <p className='text-secondary'>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
                        </div>
                    </div>
                    <div className="col-md-4 scol">
                        <div className="sicon"><img src={sicon2} alt="" width="100%" /></div>
                        <div className="stext">
                            <h5>Well Explained Code</h5>
                            <p className='text-secondary'>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
                        </div>
                    </div>
                    <div className="col-md-4 scol">
                        <div className="sicon"><img src={sicon3} alt="" width="100%" /></div>
                        <div className="stext">
                            <h5>Free Updates</h5>
                            <p className='text-secondary'>Curabitur quas nets lacus ets nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
                        </div>
                    </div>
                    <div className="col-md-4 scol">
                        <div className="sicon"><img src={sicon4} alt="" width="100%" /></div>
                        <div className="stext">
                            <h5>Montly Awards</h5>
                            <p className='text-secondary'>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
                        </div>
                    </div>
                    <div className="col-md-4 scol">
                        <div className="sicon"><img src={sicon5} alt="" width="100%" /></div>
                        <div className="stext">
                            <h5>Easy Customizable</h5>
                            <p className='text-secondary'>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
                        </div>
                    </div>
                    <div className="col-md-4 scol">
                        <div className="sicon"><img src={sicon6} alt="" width="100%" /></div>
                        <div className="stext">
                            <h5>24/7 Support</h5>
                            <p className='text-secondary'>Curabitur quas nets lacus ets nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
                        </div>
                    </div>

                </div>
                <div className="row r62">
                    <div className="col-md-6 scol1">
                        <iframe src="https://player.vimeo.com/video/69988283?h=374ede24b7" width='100%' height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-6 scol2">


                        <h3 className="medium-title">Watch the video presentation.</h3>

                        <p className='text-secondary'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui ipsum quiaim netsum. Consequuntur sequimagni.</p>

                        <p className='text-secondary'>Consequuntur magni netsum es qui ratione sequi nesciunt. Neque vetim quisquat, quia voluptas quistri ipsum quiaim  magni eti ratione.</p>

                        <a href="#Home" className='sbtn'>Discover More</a>

                    </div>
                </div>
            </div>
            <div className="banner4">
                <div className="container bant4">
                    <h2 className='text-light'>Seen enough? Let's get started.</h2>
                    <p >No Fixed Contract. No Installation Required. Trusted &amp; Secure.</p>
                    <a href="#Pricing" className='sbtn'>TRY IT FOR FREE!</a>
                </div>
            </div>
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



        </section>
    )
}

export default Services