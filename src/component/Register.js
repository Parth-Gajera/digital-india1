import React from 'react'

import register from '../img/register.jpg'

const Register = () => {
  return (
    <section className="register" id="Register">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 c41">
            <span className="register-image"><img src={register} alt="" width='100%' /></span>
          </div>
          <div className="col-md-6 c42">
            <div className='register-content'>
              <h3 className='text-white'>Register Your Attendance Today.</h3>
              <p className='text-white'>Curabitur quam etsum lacus etsumis nulat iaculis etsum vitae etsum nisle varius loremis sed feugiat ligula aliquam ets vitae dictis netsum et ipsum netsum et quia nihilse etsa illum sedit consequatur quias sit coloris.</p>

              <form className='form' action="php/register.php" method="post">
                <div className="row">

                  <div className="col-md-6">
                    <input className="register-input" required="" name="register_names" placeholder="Full Name*" type="text" />
                    <input className="register-input" required="" name="register_phone" placeholder="Phone Number*" type="text" />
                  </div>

                  <div className="col-md-6">
                    <input className="register-input" required="" name="register_email" placeholder="Email Adress*" type="email" />
                    <select className="register-input" required="" name="register_ticket">
                      <option value="">Ticket Type*</option>
                      <option value="One Day Access">One Day Access</option>
                      <option value="Two Days Access">Two Days Access</option>
                      <option value="Three Days Access">Three Days Access</option>
                    </select>
                  </div>
                </div>
                <input className="register-submit" value="Register Now" type="submit" />

              </form>
              <p class="text-white">*We process the payment via a secure gateway.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register