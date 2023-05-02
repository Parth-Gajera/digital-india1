import React from 'react'

import star from "../img/star .png"
import {AiOutlineTwitter } from 'react-icons/ai';
import {FaPinterestP} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {TiSocialInstagram} from 'react-icons/ti';
import {RiSkypeFill} from 'react-icons/ri';
import {RiWhatsappFill} from 'react-icons/ri';


const Contact = () => {
    return (
        <div>
            <section id="Contact">
                <div className="container-fluid">
                    <div className="container">

                        <h2 className='head2 text-white'>Our Latest News</h2>
                        <div className="deco">
                            <span className="star"><img src={star} alt="" width="100%" /></span>
                        </div>
                        <p className='text-center' style={{ opacity: '.5', marginBottom: '50px', color: '#fff' }}>There are many variations of passages of Lorem Ipsum available, but the majority<br />
                            have suffered alteration, by injected humour, or new randomised words.</p>

                        <form id="contact-form" className="row" action="php/contact.php" method="post">

                            <div className="col-md-6">
                                <input className="contact-input white-input" required="" name="contact_names" placeholder="Full Name*" type="text" />
                                <input className="contact-input white-input" required="" name="contact_subject" placeholder="Subject*" type="text" />
                            </div>

                            <div className="col-md-6">
                                <input className="contact-input white-input" required="" name="contact_email" placeholder="Email Adress*" type="email" />
                                <input className="contact-input white-input" required="" name="contact_phone" placeholder="Phone Number*" type="text" />
                            </div>

                            <div className="col-md-12">
                                <textarea className="contact-commnent white-input" rows="2" cols="20" name="contact_message" placeholder="Your Message..."></textarea>
                            </div>

                            <div className="col-md-12">
                                <input value="Send Message" id="submit-button" className="contact-submit" type="submit" />
                            </div>

                        </form>

                    </div>
                </div >
            </section >

            <section className='container-fluid footer' id="Footer">
                <div className="container">
                    <div className="row">

                      
                        <div className="col-md-12 text-center">

                            <div className="copyright">
                            <a className="navbar-brand" href='#Home'><span className='brand' style={{marginBottom:"20px"}}><span className="blue">Dig</span>India</span></a>
                                <p>Copyright © 2023. Designed &amp; Developed by <a href="#Home" style={{color:'#34b1c4'}} >Parth Gajera</a></p>
                            </div>
                           

                            <ul className="footer_social">
                                <li>
                                    <a href="#Home" className='ibtn'>
                                     <AiOutlineTwitter className='icon'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#Home" className='ibtn'>
                                <RiWhatsappFill className='icon'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#Home" className='ibtn'>
                                <FaFacebookF className='icon'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#Home" className='ibtn'>
                                <TiSocialInstagram className='icon'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#Home" className='ibtn'>
                                <RiSkypeFill className='icon'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#Home" className='ibtn'>
                                        <FaPinterestP className='icon'/>
                                    </a>
                                </li>
                            </ul>
                          

                        </div>
                  

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Contact