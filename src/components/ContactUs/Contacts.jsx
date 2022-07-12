import React from 'react';
import ContactBanner from './contactBanner';
import Inbox from '../Home/Inbox';
import TopReceipe from './TopReceipe';
import Footer from '../common/Footer';

function Contacts(props) {
    return (
        <>
            <ContactBanner />
            <Inbox />
            <TopReceipe />
            <Footer />
        </>
    );
}

export default Contacts;