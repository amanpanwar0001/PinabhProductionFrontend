import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./contact.css";
import Footer from "./Footer";

const Contact = () => {
  // node Mailer

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [myname, setName] = useState("");

  const baseUrl = "http://localhost:5001";

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent form submission refresh
    let dataSend = {
      myname: myname,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    try {
      const res = await fetch(`${baseUrl}/send-email`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      // Handle success and failure
      if (res.ok) {
        alert("Email sent successfully!");
        setName(""); // Clear input fields after sending
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div>
        <section id="contact" className="contactA section">
          <div id="txt" className="containerA section-title">
            <h2 style={{marginTop:"20px"}}>Contact </h2>
            <p>Contact Us</p>
          </div>

          <div className="mb-5">
            <iframe
              style={{ border: 0, width: "100%", height: "400px" }}
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
                    <p>
                      Monday-Saturday:
                      <br />
                      10:00 AM - 06:00 PM
                    </p>
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
                <form className="email-form" onSubmit={ sendEmail }>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="from_name"
                        className="form-control"
                        placeholder="Your Name"
                        onChange={(e)=>setName(e.target.value)}
                        value={myname}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        name="from_email"
                        placeholder="Your Email"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="from_phone"
                        placeholder="Phone Number"
                        onChange={(e)=>setPhone(e.target.value)}
                        value={phone}
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="from_subject"
                        placeholder="Subject"
                        onChange={(e)=>setSubject(e.target.value)}
                        value={subject}
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        onChange={(e)=>setMessage(e.target.value)}
                        value={message}
                        required
                      ></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn"> 
                        Send Message
                      </button>
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
