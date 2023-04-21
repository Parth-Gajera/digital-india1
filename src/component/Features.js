import React from 'react'

import star from "../img/star .png"
import ficon1 from "../img/ficon1.png"
import ficon2 from "../img/ficon2.png"
import ficon3 from "../img/ficon3.png"
import fimg from "../img/fimg.jpg"
import fimg1 from "../img/fimg1.jpg"
import check from "../img/checkmark.png"
const Features = () => {
  return (
    <div className="features" id="Features">
      <div className="container">
        <h2 className='head2'>Amazing Features</h2>
        <div className="deco">
          <span className="star"><img src={star} alt="" width="100%" /></span>
        </div>
        <p className='text-center' style={{ opacity: '.5' }}>There are many variations of passages of Lorem Ipsum available, but the majority<br />
          have suffered alteration, by injected humour, or new randomised words.</p>
        <div className="row">
          <div className="col-md-4 text-center">
            <p className="ficon"><img src={ficon1} alt="" width="100%" /></p>
            <h3 className='head21'>Fully Customizable</h3>
            <p className='ftext'>Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.</p>
          </div>
          <div className="col-md-4 text-center">
            <p className="ficon"><img src={ficon2} alt="" width="100%" /></p>
            <h3 className='head21'>Responsive Design</h3>
            <p className='ftext'>Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.</p>
          </div>
          <div className="col-md-4 text-center">
            <p className="ficon"><img src={ficon3} alt="" width="100%" /></p>
            <h3 className='head21'>SEO Ready Code</h3>
            <p className='ftext'>Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid banner2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="fimg"><img src={fimg} alt="" width="100%" /></span>
            </div>
            <div className="col-md-6 c2">
              <h3 className='head22'>Design & style should always work toward making you feel good.</h3>
              <p style={{ opacity: '.5', "margin-bottom": '15px' }}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum lorem fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et poris ratione sequi enim ipsam voluptatem quia volupti tempor ante netsum quia magni.</p>
              <ul className='fcontent'>
                <li className='check'> <img src={check} alt="" width='5%' /> <span style={{ opacity: '.5' }}>Netsum est, qui ipsum quiaim netsum sequi net tempor.</span> </li>
                <li className='check'> <img src={check} alt="" width='5%' /> <span style={{ opacity: '.5' }}>Etiam tempor ante acu ipsum finibus, atimus urnas.</span> </li>
                <li className='check'> <img src={check} alt="" width='5%' /> <span style={{ opacity: '.5' }}>Atimus urnas netsudat, qui ipsum quiaim netsum.</span> </li>
                <li className='check'> <img src={check} alt="" width='5%' /><span style={{ opacity: '.5' }}> Etiam tempor ante acum ipsum et finibus.</span> </li>
              </ul>
              <a href="#Home" class="fbtn">Discover More</a>
            </div>
          </div>

        </div>
      </div>
      <div className="container-fluid banner3">
<div className="container">
  <div className="row">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  
  </div>
  </div>
    </div>

  )
}

export default Features