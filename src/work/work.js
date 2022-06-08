import React, { Component } from 'react';
import {Work,Worktitle,Workspan,Part,Container,Icon,Parttitle,Line,Partdesc} from'./workstyle';


class WORK extends Component {
    state = { works: [] };

    componentDidMount() {
        const axios = require("axios");

        // Make a request for a user with a given ID
        axios
          .get("https://arwaragab22.github.io/react-templete-/data.json")
          .then((response) => {
            this.setState({ works: response.data.works });
          });
}
   
    render() {
      
        let w = this.state.works.map((ele,i) => {
            return (
              <Part first={i} key={i}>
                <Icon className={ele.icon_name}></Icon>
                    <Parttitle>{ele.title}</Parttitle>
                <Line />
                <Partdesc>
               {ele.body}
                </Partdesc>
              </Part>
            );
        })
    return (
      <Work id="work">
        <Worktitle>
          <Workspan>My</Workspan> Work
        </Worktitle>
      
            <Container>{w}</Container>
      </Work>
    );
  }
}
 
export default WORK;