import React from 'react';
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import '../styles/Contact.css';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-container bg-light">
        <div className="container m-auto">
          <div className="row">
            <div className="col-md-6 mt-4">
              <div className="p-5">
                <div className="contact-info mb-4">
                  <i className="bi bi-telephone icon"></i> 
                  <div className="pb-4">
                    <h5 className='text-muted'>Call Us</h5>
                    <p>+(02) 38 415 878</p>
                  </div>
                </div>
                <div className="contact-info mb-4">
                  <i className="bi bi-envelope icon"></i> 
                  <div className="pb-4">
                    <h5 className='text-muted'>Email Us</h5>
                    <p>support@TaskLeed.com</p>
                  </div>
                </div>
                <div className="contact-info mb-4">
                  <i className="bi bi-geo-alt icon"></i>
                  <div className="pb-4">
                    <h5 className='text-muted'>Visit Us</h5>
                    <p>Task Management HQ, 7510 Innovation Tower, San Francisco, USA</p>
                  </div>
                </div>
                <div className="contact-info mb-4">
                  <i className="bi bi-clock icon"></i> 
                  <div className="pb-4">
                    <h5 className='text-muted'>Working Hours</h5>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-3">
              <div className="p-4 my-3">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="message" className="form-label mb-2">Your Message</label>
                    <textarea className="form-control" id="message" rows="5" placeholder="How can we assist you with your task management needs?"></textarea>
                  </div>
                  <button type="submit" className="btn btn-success w-100 m-auto">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;