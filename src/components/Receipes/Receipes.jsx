import React from 'react';
import Footer from '../common/Footer';
import Inbox from '../Home/Inbox';
import ReceipeDirection from './ReceipeDirection';
import ReceipeInfo from './ReceipeInfo';
import ReceipeIngrediants from './ReceipeIngrediants';
import TopReceipe from './TopReceipe';

function Receipes(props) {
    return (
        <>
          <ReceipeInfo />
          <ReceipeIngrediants />    
          <ReceipeDirection />  
          <Inbox />
          <TopReceipe />
          <Footer />        
        </>
    );
}

export default Receipes;