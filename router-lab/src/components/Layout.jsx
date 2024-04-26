/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home'
import Contact from './Contacts'
import About from './About'
import NotFoundComponent from './NotFoundComponent'

const Layout = () => {
  return (
  <Router>
    <>
    <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFoundComponent/>}/>
      </Routes>
      </div>
      </>
    </Router>
  );
};

export default Layout