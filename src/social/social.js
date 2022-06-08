import React, { Component } from 'react';
import { Socialmedia,Socials,Socialspan,Socialinfo,Socialp,Socialicon}from'./socialstyle'
class Social extends Component {
    state = {social:[]} 
    
    componentDidMount() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios.get("https://arwaragab22.github.io/react-templete-/data.json").then(response=> {
      // handle success
      this.setState({social:response.data.social})
    });
}
    render() { 
        let s = this.state.social.map((ele, i) => {
            console.log(ele.id);
            return (
              <Socials key={i} first={i}>
                <Socialicon className={ele.icon}></Socialicon>
                <Socialp>
              
                  <Socialspan>{ele.title}</Socialspan>
                  <Socialspan>{ele.body}</Socialspan>
                </Socialp>
              </Socials>
            );
         
        })
        return (
          <Socialmedia>
            {s}

        
          </Socialmedia>
        );
    }
}
 
export default Social;