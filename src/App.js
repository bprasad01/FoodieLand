
import React from 'react';
import Chef from './components/Chef';
import Footer from './components/common/Footer';
import Nav from './components/common/NavBar';
import Slider from './components/Slider';
import Inbox from './components/Inbox';
import AllCategory from './components/AllCategory';
import Receipes from './components/Receipes';
import InstaPost from './components/InstaPost';
import AllReceipes from './components/AllReceipe';
import Carousel from './components/Carousel';
import Banner from './components/Banner';
import Carousels from './components/Carousel';


function App() {
  return (
    <React.Fragment>
    <Nav />
    <Carousels />
    <AllCategory />
    <Receipes />
    <Chef />
    <InstaPost />
    <AllReceipes />
    <Inbox />
    <Footer />
    </React.Fragment>
  );
}

export default App;
