import React from 'react';
import AllCategory from './AllCategory';
import Banner from './Banner';
import Receipes from './Receipes';
import Chef from './Chef';
import InstaPost from './InstaPost';
import AllReceipe from './AllReceipe';
import Inbox from './Inbox'
import Footer from '../common/Footer';

const HomeComponent = () => {
    return ( 
        <>
        <Banner />
        <AllCategory />
        <Receipes />
        <Chef />
        <InstaPost />
        <AllReceipe />
        <Inbox />
        <Footer />
        </>
     );
}
 
export default HomeComponent;