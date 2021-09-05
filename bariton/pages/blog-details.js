import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';
import Footer from '../components/Layouts/Footer';

class BlogDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Blog Details" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Blog Details" 
                /> 
                <BlogDetailsContent />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default BlogDetails;