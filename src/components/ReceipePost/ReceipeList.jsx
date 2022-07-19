import React from 'react';
import Footer from '../common/Footer';
import Subscription from '../common/Subscription';
import ReceipeHeader from './ReceipeHeader';

function ReceipeList(props) {
    return (
        <>
            <ReceipeHeader />
            <Subscription />
            <Footer />
        </>
    );
}

export default ReceipeList;