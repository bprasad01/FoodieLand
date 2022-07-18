import React from 'react';
import ContactBanner from './contactBanner';
import Inbox from '../Home/Inbox';
import TopReceipe from './TopReceipe';
import Footer from '../common/Footer';
import BannerContact from './bannerContact';

function Contacts(props) {
    return (
        <>
            {/* <ContactBanner /> */}
            <BannerContact />
            <Inbox />
            <TopReceipe />
            <Footer />
        </>
    );
}

export default Contacts;