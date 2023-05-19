import React from 'react'

import star from "../img/star .png"
import team1 from '../img/team1.jpg'
import team2 from '../img/team2.jpg'
import team3 from '../img/team3.jpg'
import team4 from '../img/team4.jpg'
import team5 from '../img/team5.jpg'
import team6 from '../img/team6.jpg'

import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsPinterest } from 'react-icons/bs';
import { FaYoutubeSquare } from 'react-icons/fa';

const Team = () => {
  return (
    <section className="team container" id="Team">

      <h2 className='head2'>Meet Our Amazing Team</h2>
      <div className="deco">
        <span className="star"><img src={star} alt="" width="100%" /></span>
      </div>
      <p className='text-center' style={{ opacity: '.5', marginBottom: '50px' }}>There are many variations of passages of Lorem Ipsum available, but the majority
        have suffered alteration, by injected humour, or new randomised words.</p>


      <div id="carouselExampleIndicators" className="carousel carousel-dark slide">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="row">

              <div className="col-md-4">
                <div className="team-img">
                  <img src={team1} className="d-block w-100" width="100%" alt="..." />
                  <div className="team-overlay">
                    <div className="team-icons">
                      <a href='#Team'><BsTwitter className='ticon' /></a>
                      <a href='#Team'><FaFacebookF className='ticon' /></a>
                      <a href='#Team'><BsPinterest className='ticon' /></a>
                      <a href='#Team'><FaYoutubeSquare className='ticon' /></a>
                    </div>
                  </div>
                </div>
                <div className="team-box">
                  <h3>Joanna Hawkins</h3>
                  <p className="team-info">Graphic Designer</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="team-img">
                  <img src={team2} className="d-block w-100" alt="..." />
                  <div className="team-overlay">
                    <div className="team-icons">
                      <a href='#Team'><BsTwitter className='ticon' /></a>
                      <a href='#Team'><FaFacebookF className='ticon' /></a>
                      <a href='#Team'><BsPinterest className='ticon' /></a>
                      <a href='#Team'><FaYoutubeSquare className='ticon' /></a>
                    </div>
                  </div>
                </div>
                <div className="team-box">
                  <h3 >JOHNATAN SMITHS</h3>
                  <p className="team-info">SEO Specialist</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="team-img">
                  <img src={team3} className="d-block w-100" alt="..." />
                  <div className="team-overlay">
                    <div className="team-icons">
                      <a href='#Team'><BsTwitter className='ticon' /></a>
                      <a href='#Team'><FaFacebookF className='ticon' /></a>
                      <a href='#Team'><BsPinterest className='ticon' /></a>
                      <a href='#Team'><FaYoutubeSquare className='ticon' /></a>
                    </div>
                  </div>
                </div>
                <div className="team-box">
                  <h3>RICHARD JOHANSON</h3>
                  <p className="team-info">Web Developer</p>
                </div>
              </div>

            </div>
          </div>

          <div className="carousel-item">
            <div className="row">

              <div className="col-md-4">
                <div className="team-img">
                  <img src={team4} className="d-block w-100" alt="..." />
                  <div className="team-overlay">
                    <div className="team-icons">
                      <a href='#Team'><BsTwitter className='ticon' /></a>
                      <a href='#Team'><FaFacebookF className='ticon' /></a>
                      <a href='#Team'><BsPinterest className='ticon' /></a>
                      <a href='#Team'><FaYoutubeSquare className='ticon' /></a>
                    </div>
                  </div>
                </div>
                <div className="team-box">
                  <h3>CHRISTINA HAWKINS</h3>
                  <p className="team-info">Graphic Designer</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="team-img">
                  <img src={team5} className="d-block w-100" alt="..." />
                  <div className="team-overlay">
                    <div className="team-icons">
                      <a href='#Team'><BsTwitter className='ticon' /></a>
                      <a href='#Team'><FaFacebookF className='ticon' /></a>
                      <a href='#Team'><BsPinterest className='ticon' /></a>
                      <a href='#Team'><FaYoutubeSquare className='ticon' /></a>
                    </div>
                  </div>
                </div>
                <div className="team-box">
                  <h3>RICHARD JOHANSON</h3>
                  <p className="team-info">SEO Specialist</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="team-img">
                  <img src={team6} className="d-block w-100" alt="..." />
                  <div className="team-overlay">
                    <div className="team-icons">
                      <a href='#Team'><BsTwitter className='ticon' /></a>
                      <a href='#Team'><FaFacebookF className='ticon' /></a>
                      <a href='#Team'><BsPinterest className='ticon' /></a>
                      <a href='#Team'><FaYoutubeSquare className='ticon' /></a>
                    </div>
                  </div>
                </div>
                <div className="team-box">
                  <h3>ALEXANDRA SMITHS</h3>
                  <p className="team-info">Graphic Designer</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>

      </div>

    </section>
  )
}

export default Team