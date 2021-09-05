import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import BlogThreeGrid from '../components/Blog/BlogThreeGrid';
import Footer from '../components/Layouts/Footer';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Blog Grid" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Blog Grid" 
                />  
                <BlogThreeGrid />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Blog;