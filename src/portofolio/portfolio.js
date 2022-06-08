import React, { Component } from "react";
import axios from "axios";

import {
  Img,
  Portfolio,
  Portfoliotitle,
  Portfoliospan,
  Portfoliolist,
  Portfolioitem,
  Box,
  Div,
  Overlay,
  Overlayspan,
} from "./portfoliostyle";

class PORTFOLIO extends Component {
  state = { img: [] };
  componentDidMount() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios.get("data.json").then((response) => {
      // handle success
      this.setState({ img: response.data.portfolio });
    });
  }
  render() {
 
       
     
   

    return (
      <Portfolio id="Portfolio">
        <Portfoliotitle>
          <Portfoliospan>My</Portfoliospan> Portfolio
        </Portfoliotitle>
        <Portfoliolist>
          <Portfolioitem>All</Portfolioitem>
          <Portfolioitem>HTML</Portfolioitem>
          <Portfolioitem>Photoshop</Portfolioitem>
          <Portfolioitem>Wordpress</Portfolioitem>
          <Portfolioitem>Mobile</Portfolioitem>
        </Portfoliolist>
        <Box>
          <Div>
            <Img src={require(`../images/1.jpg`)} />
            <Overlay>
              <Overlayspan>Show Image</Overlayspan>
            </Overlay>
          </Div>
        </Box>
        <Box>
          <Div>
            <Img src={require(`../images/2.jpg`)} />
            <Overlay>
              <Overlayspan>Show Image</Overlayspan>
            </Overlay>
          </Div>
        </Box>
        <Box>
          <Div>
            <Img src={require(`../images/3.jpg`)} />
            <Overlay>
              <Overlayspan>Show Image</Overlayspan>
            </Overlay>
          </Div>
        </Box>
        <Box>
          <Div>
            <Img src={require(`../images/4.jpg`)} />
            <Overlay>
              <Overlayspan>Show Image</Overlayspan>
            </Overlay>
          </Div>
        </Box>
        <Box>
          <Div>
            <Img src={require(`../images/5.jpg`)} />
            <Overlay>
              <Overlayspan>Show Image</Overlayspan>
            </Overlay>
          </Div>
        </Box>
        <Box>
          <Div>
            <Img src={require(`../images/6.jpg`)} />
            <Overlay>
              <Overlayspan>Show Image</Overlayspan>
            </Overlay>
          </Div>
        </Box>
        <Box>
          <Div>
            <Img src={require(`../images/7.jpg`)} />
            <Overlay>
              <Overlayspan>Show Image</Overlayspan>
            </Overlay>
          </Div>
        </Box>
        <Box>
          <Div>
            <Img src={require(`../images/8.jpg`)} />
            <Overlay>
              <Overlayspan>Show Image</Overlayspan>
            </Overlay>
          </Div>
        </Box>
      </Portfolio>
    );
  }
}

export default PORTFOLIO;
