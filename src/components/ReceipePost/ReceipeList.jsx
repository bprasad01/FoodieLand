import React from 'react';
import Footer from '../common/Footer';
import Inbox from '../Home/Inbox';
import ReceipeHeader from './ReceipeHeader';

function ReceipeList(props) {
    return (
        <>
            <ReceipeHeader />
            <Inbox />
            <Footer />
        </>
    );
}

export default ReceipeList;