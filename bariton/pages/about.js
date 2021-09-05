import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutContact from '../components/About/AboutContent';
import Services from '../components/HomeOne/Services';
import Team from '../components/Common/Team';
import PartnerContent from '../components/Common/PartnerContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import PricingCard from '../components/Common/PricingCard';
import FreeTrialForm from '../components/Common/FreeTrialForm';
import Footer from '../components/Layouts/Footer';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="About Us" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="About Us" 
                />  
                <AboutContact />
                <Services />
                <Team />
                <PartnerContent />
                <FeedbackSlider />
                <PricingCard />
                <FreeTrialForm />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default About;