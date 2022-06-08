import React, { Component } from 'react';
import {Homesec,Homeinformation,Hometitle,Homeinfo,Homedesc,Homebtn} from'./setylelanding'
class LANDING extends Component {
    state = {  } 
    render() { 
        return (
            <Homesec >
            <div className="container">
                <Homeinformation>
                    <Hometitle>arwa ragab</Hometitle>
                    <Homeinfo>Creative Director</Homeinfo>
                    <Homedesc>
                        Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </Homedesc>
                    <Homebtn>Let's Begin</Homebtn>
                </Homeinformation>
            </div>
        </Homesec>);
    }
}
 
export default LANDING;