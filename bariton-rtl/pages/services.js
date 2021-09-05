import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ServicesContent from '../components/Services/ServicesContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import Footer from '../components/Layouts/Footer';

class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Our Services" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Services" 
                />  
                <ServicesContent />
                <FeedbackSlider />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Services;