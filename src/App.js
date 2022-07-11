
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Blogs from './components/BlogPost/Blogs';
import Nav from './components/common/NavBar';

import HomeComponent from './components/Home/HomeComponent';
import Receipes from './components/Receipes/Receipes';
import BlogLists from './components/BlogList/BlogLists';
import Contacts from './components/ContactUs/Contacts';
import NotFound from './components/Notfound/NotFound';


function App() {
  return (
    <React.Fragment>
    <Nav />
    <Switch>
      <Route path="/home" component={HomeComponent}/>
      <Route path="/receipes" component={Receipes}/>
      <Route path="/blogposts" component={Blogs} />
      <Route path="/bloglists" component={BlogLists}/>
      <Route path="/contacts" component={Contacts} />
      <Route path="/not-found" component={NotFound} />
      <Redirect from='/' exact to='/home'/>
      <Redirect exact to='/not-found' />
    </Switch>
    </React.Fragment>
  );
}

export default App;
