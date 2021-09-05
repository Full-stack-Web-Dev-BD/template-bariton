import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/Faq/FaqContent';
import Footer from '../components/Layouts/Footer';

class Faq extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Frequently Asked Questions" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Faq" 
                />  
                <FaqContent />
 
                <Footer />
            </React.Fragment>
        );
    }
}

export default Faq;