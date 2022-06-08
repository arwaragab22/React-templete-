import React, { Component } from 'react';

import {
    Navsec, Logo, Logotext, Ullist, Ulitem, Ula, Ullink
} from './style';
class NAV extends Component {
    state = {  } 
    render() { 
        return (
          // eslint-disable-next-line react/jsx-no-undef
          <Navsec>
            <div className="container">
              <Logo>
                <Logotext>Ultra Profile</Logotext>
              </Logo>

              <Ullist>
                <Ulitem>
                  {" "}
                  <Ullink to="/">Home </Ullink>
                </Ulitem>
                <Ulitem className="list-item">
                  <Ula href="#work">Work</Ula>
                </Ulitem>
                <Ulitem>
                  <Ula href="#Portfolio">Portfolio</Ula>
                </Ulitem>
                <Ulitem>
                  <Ula href="#Resume">Resume</Ula>
                </Ulitem>
                <Ulitem>
                  <Ula href="#About">About</Ula>
                </Ulitem>
                <Ulitem>
                  <Ullink to="/contact">Contact</Ullink>
                </Ulitem>
              </Ullist>
            </div>
          </Navsec>
        );
    }
}
 
export default NAV;