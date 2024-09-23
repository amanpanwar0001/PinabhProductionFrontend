 

import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './contact.css';
import emailjs from '@emailjs/browser';
import Footer from './Footer';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    alert("Data submitted successfully!");

    emailjs.sendForm('service_v0v89ox', 'template_g4l1xh7', form.current, {
      publicKey: 'U0c1g-Hn_qeCC2nVt',
    })
    .then(() => {
      console.log('SUCCESS!');
      form.current.reset();
      window.location.reload();  
    }, (error) => {
      console.log('FAILED...', error.text);
    });
  };

  return (
    <>
   
     
      <div>
        <section id="contact" className="contactA section">
          <div id="txt" className="containerA section-title">
            <h2>Contact </h2>
            <p>Contact Us</p>
          </div>

          <div className="mb-5">
            <iframe
              style={{ border: 0, width: '100%', height: '400px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.3774207314955!2d72.83147040309207!3d19.129154365888066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b620fbaefbd9%3A0x8a2d91e9af2aacff!2sAndheri%20West!5e0!3m2!1sen!2sin!4v1726407418928!5m2!1sen!2sin"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>

          <div className="containerA">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Location</h3>
                    <p>16, Four Bunglows, Andheri West, Mumbai, India</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-clock flex-shrink-0"></i>
                  <div>
                    <h3>Open Hours</h3>
                    <p>Monday-Saturday:<br />10:00 AM - 06:00 PM</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+91-9372539572</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>info@pinabhfilms.com</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <form ref={form} onSubmit={sendEmail} className="email-form">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input type="text" name="from_name" className="form-control" placeholder="Your Name" required />
                    </div>

                    <div className="col-md-6">
                      <input type="email" className="form-control" name="from_email" placeholder="Your Email" required />
                    </div>

                    <div className="col-md-12">
                      <input type="text" className="form-control" name="from_subject" placeholder="Subject" required />
                    </div>

                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;


 
