import React from 'react';
import Lightbox from './Lightbox';


import star from "../img/star .png";



const images = [
  { src: "https://demo.epic-webdesign.com/tf-besmart/v1/images/p1.jpg", alt: 'Image 1'},
  { src: "https://demo.epic-webdesign.com/tf-besmart/v1/images/p2.jpg", alt: 'Image 2'},
  { src: 'https://demo.epic-webdesign.com/tf-besmart/v1/images/p3.jpg', alt: 'Image 3'},
  { src: 'https://demo.epic-webdesign.com/tf-besmart/v1/images/p4.jpg', alt: 'Image 4' },
  { src: 'https://demo.epic-webdesign.com/tf-besmart/v1/images/p5.jpg', alt: 'Image 5' },
  { src: 'https://demo.epic-webdesign.com/tf-besmart/v1/images/p6.jpg', alt: 'Image 6' },

];



const Portfolio = () => {
  return (
    <section className="portfolio" id="Portfolio">
      
      <div className="container">
        <h2 className='head2'>Our Latest Work</h2>
        <div className="deco">
          <span className="star"><img src={star} alt="" width="100%" /></span>
        </div>
        <p className='text-center' style={{ opacity: '.5',marginBottom:'40px' }}>There are many variations of passages of Lorem Ipsum available, but the majority<br />
          have suffered alteration, by injected humour, or new randomised words.
        </p>

        <Lightbox images={images} />
       

      </div>
    </section>
  )
}

export default Portfolio