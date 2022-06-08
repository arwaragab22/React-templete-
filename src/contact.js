import React, { Component } from 'react';
import { Drop,Droptitle,Droptitlespan,Dropform,Dropinput,Dropformminput,Textarea,Inputemail,Inputsubmit,Inputtext} from './contactstyle'
 class CONTACT extends Component {
    state = {  } 
    render() { 
        return (   
        <Drop>
            <div className="container">
                <Droptitle><Droptitlespan>contact </Droptitlespan>us</Droptitle>
                <Dropform>
                    <Drop>
                        <Inputtext type="text" placeholder="Your Name"/>
                        <Inputemail type="email" placeholder="Your Email"/>
                    </Drop>
                    <Dropinput type="text" className="sub" placeholder="Your Subject"/>
                    <Textarea  cols="30" rows="10" placeholder="Your Message"></Textarea>
                    <Inputsubmit type="submit" value="Send Message"/>
                </Dropform>
            </div>
        </Drop>);
    }
}
 
export default CONTACT;