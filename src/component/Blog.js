import React from 'react'

import star from "../img/star .png"
import check1 from "../img/check1.png"
import blog1 from "../img/blog1.jpg"
import blog2 from "../img/blog2.jpg"
import blog3 from "../img/blog3.jpg"
import blog4 from "../img/blog4.png"
import blogic1 from "../img/blog-icon1.png"
import blogic2 from "../img/blog-icon2.png"

const Blog = () => {
    return (
        <div className="blog" id="Blog">
            <div className="container">

                <h2 className='head2'>Our Latest News</h2>
                <div className="deco">
                    <span className="star"><img src={star} alt="" width="100%" /></span>
                </div>
                <p className='text-center' style={{ opacity: '.5', marginBottom: '50px' }}>There are many variations of passages of Lorem Ipsum available, but the majority<br />
                    have suffered alteration, by injected humour, or new randomised words.</p>

                <div className="row" style={{ "padding-bottom": "90px" }}>
                    <div className="col-md-4">
                        <img src={blog1} className="d-block w-100" alt="..." />
                        <div className="blog-box">

                            <h5 className="blog-title"><a href="#Home">Affinity Designer Quick Start</a></h5>

                            <a href="#Home" className="blog-icon"><img src={blogic1} alt='' width="16px"></img> Paul Smith</a> |

                            <a href="#Home" className="blog-icon"><img src={blogic2} alt='' width="16px"></img> WordPress</a>

                            <p className='text-secondary' style={{ margin: "20px 0px" }}>Quis autem velis etis reprehender etims quiste voluptate velite esse quam nihil etsa illum sedit consequatur quias quiste varias netsum.</p>

                            <a href="#Home" className="bbtn">Read More!</a>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={blog2} className="d-block w-100" alt="..." />
                        <div className="blog-box">

                            <h5 className="blog-title"><a href="#Home">Solid HTML Form Structure</a></h5>

                            <a href="#Home" className="blog-icon"><img src={blogic1} alt='' width="16px"></img> By John Doe</a> |

                            <a href="#Home" className="blog-icon"><img src={blogic2} alt='' width="16px"></img> Marketing</a>

                            <p className='text-secondary' style={{ margin: "20px 0px" }}>Quis autem velis etis reprehender etims quiste voluptate velite esse quam nihil etsa illum sedit consequatur quias quiste varias netsum.</p>

                            <a href="#Home" className="bbtn">Read More!</a>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={blog3} className="d-block w-100" alt="..." />
                        <div className="blog-box">

                            <h5 className="blog-title"><a href="#Home">New WordPress Theme</a></h5>

                            <a href="#Home" className="blog-icon"><img src={blogic1} alt='' width="16px"></img> By John Doe</a> |
                            <a href="#Home" className="blog-icon"><img src={blogic2} alt='' width="16px"></img> Marketing</a>

                            <p className='text-secondary' style={{ margin: "20px 0px" }}>Quis autem velis etis reprehender etims quiste voluptate velite esse quam nihil etsa illum sedit consequatur quias quiste varias netsum.</p>

                            <a href="#Home" className="bbtn">Read More!</a>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid blog-bg">
                <div className="container banner5">


                    <div className="row">
                        <div className="col-md-6 blog-text">
                            <h3 className="text-white" style={{ "font-size": "32px" }}>Design &amp; style should always work toward making you feel good.</h3>
                            <p className="">Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum lorem fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et poris ratione sequi enim ipsam voluptatem quia volupti tempor ante netsum quia magni.</p>
                            <ul style={{ paddingLeft: "0px",lineHeight:'28px',fontSize:'15px' }}>
                                <li className=""> <img src={check1} alt="" />  Netsum est, qui ipsum quiaim netsum sequi net tempor.</li>
                                <li className=""> <img src={check1} alt="" />  Etiam tempor ante acu ipsum finibus, atimus urnas.</li>
                                <li className=""> <img src={check1} alt="" />  Atimus urnas netsudat, qui ipsum quiaim netsum.</li>
                                <li className=""> <img src={check1} alt="" />  Etiam tempor ante acum ipsum et finibus.</li>
                            </ul>
                            <a href="#Home" className='bbtn2'>Discover More</a>
                        </div>
                        <div className="col-md-6 blog-img">

                            <img src={blog4} className="" alt="imac" width="100%" />

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Blog