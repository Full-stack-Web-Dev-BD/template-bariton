import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import BlogWithRightSidebar from '../components/Blog/BlogWithRightSidebar';
import Footer from '../components/Layouts/Footer';
 
class Blog2 extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Blog With Right Sidebar" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Blog With Right Sidebar" 
                /> 
                <BlogWithRightSidebar />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Blog2;