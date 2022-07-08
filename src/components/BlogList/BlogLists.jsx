import React from 'react';
import Footer from '../common/Footer';
import Inbox from '../Home/Inbox';
import BlogHeader from './BlogHeader';

function BlogLists(props) {
    return (
        <>
            <BlogHeader />
            <Inbox />
            <Footer />
        </>
    );
}

export default BlogLists;