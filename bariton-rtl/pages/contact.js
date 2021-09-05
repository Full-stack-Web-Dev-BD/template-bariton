import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Contact" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Contact" 
                />  
                <ContactForm />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Contact;