import React, { Component } from 'react';
import Link from 'next/link';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="main-banner-content">
                                <h1>World’s Leading Machine Learning Company</h1>
                                <p>ML today are able to supply needful of help, information, and positive experience of maintaining intimacy with customers. Eventually, chatbot ideas bring a pleasant experience of all these qualities into the conversation.</p>

                                <div className="btn-box">
                                    <Link href="/contact">
                                        <a className="btn btn-primary">Schedule A Demo</a>
                                    </Link>

                                    <Link href="/contact">
                                        <a className="optional-btn">Get Started Free</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="featured-services-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i className="flaticon-robot"></i>
                                    </div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>Robotic Process Automation</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-featured-services-box active">
                                    <div className="icon">
                                        <i className="flaticon-artificial-intelligence"></i>
                                    </div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>Cognitive Automation</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-featured-services-box">
                                    <div className="icon">
                                        <i className="flaticon-machine-learning"></i>
                                    </div>

                                    <h3>
                                        <Link href="/service-details">
                                            <a>Cognitive Engagement</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;