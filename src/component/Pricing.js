import React from 'react'

import star from "../img/star .png"

const Pricing = () => {
    return (
        <div className="pricing" id="Pricing">
            <div className="container">
                <h2 className='head2'>Choose Your Pricing Plan</h2>
                <div className="deco">
                    <span className="star"><img src={star} alt="" width="100%" /></span>
                </div>
                <p className='text-center' style={{ opacity: '.5', marginBottom: '50px' }}>There are many variations of passages of Lorem Ipsum available, but the majority<br />
                    have suffered alteration, by injected humour, or new randomised words.
                </p>

                <div className="row">

                    <div className="col-md-4">
                        <div className="pricing-box">
                            <div className="pricing-top">
                                <h3>Starter</h3>
                                <p className="price"><span className="currency white">$</span> <span className="number white">99</span> <span className="month white">p/month</span></p>
                            </div>
                            <div className="pricing-bottom">
                                <ul>
                                    <li>1 GB of space</li>
                                    <li>200 messages</li>
                                    <li>unlimited updates</li>
                                    <li>1 user acounts</li>
                                    <li>2 databases</li>
                                </ul>
                                <a href="#Home" className="pbtn">REGISTER TODAY</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <div className="pricing-box">
                            <div className="pricing-top">
                                <h3>Advanced</h3>
                                <p className="price"><span className="currency white">$</span> <span className="number white">199</span> <span className="month white">p/month</span></p>
                            </div>
                            <div className="pricing-bottom">
                                <ul>
                                    <li>1 GB of space</li>
                                    <li>200 messages</li>
                                    <li>unlimited updates</li>
                                    <li>1 user acounts</li>
                                    <li>2 databases</li>
                                </ul>
                                <a href="#Home" className="pbtn2">REGISTER TODAY</a>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-4">
                        <div className="pricing-box">
                            <div className="pricing-top">
                                <h3>Intermediate</h3>
                                <p className="price"><span className="currency white">$</span> <span className="number white">299</span> <span className="month white">p/month</span></p>
                            </div>
                            <div className="pricing-bottom">
                                <ul>
                                    <li>1 GB of space</li>
                                    <li>200 messages</li>
                                    <li>unlimited updates</li>
                                    <li>1 user acounts</li>
                                    <li>2 databases</li>
                                </ul>
                                <a href="#Home" className="pbtn">REGISTER TODAY</a>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="text-center">
                    <p className='condition2'>*With more than <b>25078 clients</b>, we aim to offer premium <b>marketing solutions</b> for your business.</p>
                </div>
                
            </div>  
        </div>
    )
}


export default Pricing