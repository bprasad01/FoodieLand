import React from 'react';
import Banner from './Banner';
import BlogInfo from './BlogInfo';
import Inbox from '../Home/Inbox';
import Footer from '../common/Footer';
import ReceipesPost from './ReceipesPost';
function Blogs(props) {

    return (
        <>
         <Banner />  
         <BlogInfo />
         <Inbox />
         <ReceipesPost />
         <Footer />
        </>
    );
}

export default Blogs;