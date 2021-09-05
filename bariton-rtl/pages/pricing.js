import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PricingCard from '../components/Pricing/PricingCard';
import Footer from '../components/Layouts/Footer';

class Pricing extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Our Pricing" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Pricing" 
                />  
                <PricingCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Pricing;