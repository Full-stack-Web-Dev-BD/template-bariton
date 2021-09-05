import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import TeamContent from '../components/Team/TeamContent';
import FreeTrialForm from '../components/Common/FreeTrialForm';
import Footer from '../components/Layouts/Footer';

class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Our Team" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Team" 
                />  
                <TeamContent />
                <FreeTrialForm />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Team;