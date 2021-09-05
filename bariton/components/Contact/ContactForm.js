import React, { Component } from 'react';
import Link from 'next/link';

class ContactForm extends Component {
    render() {
        return (
            <section className="contact-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <span>Message Us</span>
                        <h2>Drop us Message for any Query</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="contact-form">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="contact-image">
                                    <img src="/images/contact.png"  alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" id="name" className="form-control" placeholder="Name" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" className="form-control" placeholder="Email" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="phone_number" id="phone_number" className="form-control" placeholder="Phone" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="msg_subject" id="msg_subject" className="form-control" placeholder="Subject" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form-control" id="message" cols="30" rows="5" required placeholder="Your Message"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Contact info */}
                    <div className="contact-info">
                        <div className="contact-info-content">
                            <h3>Contact us by Phone Number or Email Address</h3>
                            <h2>
                                <span className="number">+088 130 629 8615</span>
                                <span className="or">OR</span>
                                <span className="email">bariton@gmail.com</span>
                            </h2>

                            <ul className="social">
                                <li>
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;