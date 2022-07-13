import React from 'react';
import AboutBanner from './AboutBanner';
import Inbox from '../Home/Inbox';
import Footer from '../common/Footer';
import Testimony from './Testimony';
import AboutReceipe from './AboutReceipe';
function About(props) {
    return (
      <>
        <AboutBanner />
        <Testimony />
        <Inbox />
        <AboutReceipe />
        <Footer />
      </>
    );
}

export default About;