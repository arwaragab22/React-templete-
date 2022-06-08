import React, { Component } from 'react';
import { Creative,Creativeinfo,Creativinfotitle,Creativeinfotitlespan,Creativeh4,Creativea,Creativedesc}from './aboutstyle'
class About extends Component {
    state = {  } 
    render() { 
        return (        <Creative id="About">
            <div className="container">
                <Creativeinfo>
                    <Creativinfotitle><Creativeinfotitlespan>This is</Creativeinfotitlespan> Me</Creativinfotitle>
                    <Creativeh4>Creative Director</Creativeh4>
                    <Creativedesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Creativea>explicabo</Creativea> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Creativedesc>
                 
                </Creativeinfo>
            </div>
        </Creative>);
    }
}
 
export default About;