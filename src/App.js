
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


function App() {
  return (
    <React.Fragment>
    <Nav />
    <Slider />
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
