import React from 'react'

const ContactFlex = () => {
  return (
      <>
        <div className="container ">
          <br /><br />
          <div className="row">
            <div className="col d-flex flex-column justify-content-center align-items-center">
              <h1 className='display-5'>Contact Us</h1>
              <br />
              <p><strong>HOME / </strong><a href="" className='text-secondary'>Contact Us</a></p>
            </div>
          </div>
          <br /><br /><br />
          <div className="row">
            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
              <i className="fa-solid fa-location-dot fa-2x text-light bg-dark p-4 rounded-circle"></i><br />
              <br /><p><strong>Store Address</strong></p><br />
              <p>PO Box 16122 Collins Street <br /> West Victoria 8007 Australia</p>
            </div>
            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
              <i className="fa-solid fa-phone fa-2x text-light bg-dark p-4 rounded-circle"></i><br />
              <br /><p><strong>Call Info</strong></p><br />
              <p>Open a chat or give us call at <br />+61 3 8376 6284</p>
            </div>
            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
              <i className="fa-regular fa-envelope fa-2x text-light bg-dark p-4 rounded-circle"></i><br />
              <br /><p><strong>Email Support</strong></p><br />
              <p> Sent mail to <br />support@mixtas.com</p>
            </div>
            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
              <i className="fa-regular fa-message fa-2x text-light bg-dark p-4 rounded-circle"></i><br />
              <br /><p><strong>Live Support</strong></p><br />
              <p>Live chat service <br /> 
              <a href="https://www.livechat.com">https://www.livechat.com</a></p>
            </div>
          </div>
          <br /><br /><br />
          <div className="row">
            <div className="col-lg-6 d-flex flex-column">
              <h1 className='display-5'>Get In Touch</h1>
              <input className="mb-5 border-bottom border-0 p-3 border-secondary" type="text" placeholder="Your Name" id="" />
              <input className="mb-5 border-bottom border-0 p-3 border-secondary" type="text" placeholder="Your Email" id="" />
              <input className="mb-5 border-bottom border-0 p-3 border-secondary" type="text" placeholder="Your Subject" id="" />
              <input className="mb-5 border-bottom border-0 p-3 border-secondary" type="text" placeholder="Your Message" id="" />
              <button className='btn btn-dark inline'>Send Message</button>
              <br /><br />
            </div>
            <div className="col-lg-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.696701121622!2d144.9438463867357!3d-37.820572599710616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5a3ff30273%3A0x55700729bcaebb85!2s16122%20Collins%20St%2C%20West%20Melbourne%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sin!4v1733587516525!5m2!1sen!2sin" class="w-100 h-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <br /><br />
        </div>
      </>
  )
}

export default ContactFlex