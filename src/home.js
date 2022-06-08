import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NAV from './nav/nav';
import LANDING from './landing/landing';
import  Work  from './work/work';
import  Portfolio  from './portofolio/portfolio';
import  PROFILE from './profile/profile';
import About from './about/about';
import Social from './social/social';



class HOME extends Component {
    state = {  } 
    render() { 
      return (
        <div>
          <LANDING />
          <Work />
          <Portfolio />
          <PROFILE />
          <About />
          <Social />
       
        </div>
      );
    }
}
 
export default HOME;