import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import About from '../components/HomeOne/About';
import Services from '../components/HomeOne/Services';
import Webinar from '../components/HomeOne/Webinar';
import PartnerContent from '../components/Common/PartnerContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import PricingCard from '../components/Common/PricingCard';
import BlogPost from '../components/Common/BlogPost';
import FreeTrialForm from '../components/Common/FreeTrialForm';
import Footer from '../components/Layouts/Footer';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MainBanner />
                <About />
                <Services />
                <Webinar />
                <PartnerContent />
                <FeedbackSlider />
                <PricingCard />
                <BlogPost />
                <FreeTrialForm />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;