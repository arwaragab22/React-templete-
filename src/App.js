
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HOME from './home';
import CONTACT from './contact';
import { Component } from 'react';
import Styled from 'styled-components';
import NAV from './nav/nav';

import axios from 'axios';
import  Footer  from './footer/footer';

class App extends Component {




  render() {
      return (
        <div className="App">
          <BrowserRouter>
            <NAV/>
            <Routes>
              <Route path="/"  element={<HOME />} />
              <Route path="/contact" element={<CONTACT/>} />
            </Routes>
         <Footer/>
          </BrowserRouter>
        </div>
      );
  }

}

export default App;
