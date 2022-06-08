import React, { Component } from 'react';
import { Container, Profileskills, Profile, Profilelist, Profileitem, Profileitemspan, Profileitemspanweb, Skills, Skillsdesc, Bar, Title, PERC, Parent, Parentspan, Maintitle, Maintitlespan } from './profilestyle';
class PROFILE extends Component {
    state = {}
    render() {
        return (
          <Profileskills id="Resume">
            <Container>
              <Profile>
                <Maintitle>
                  <Maintitlespan>My </Maintitlespan>Profile
                </Maintitle>
                <Profilelist>
                  <Profileitem>
                    <Profileitemspan>Name</Profileitemspan>
                    arwa ragab
                  </Profileitem>
                  <Profileitem>
                    <Profileitemspan>Birthday</Profileitemspan>
                    21/1/1992
                  </Profileitem>
                  <Profileitem>
                    <Profileitemspan>Address</Profileitemspan>
                    agamy
                  </Profileitem>
                  <Profileitem>
                    <Profileitemspan>Phone</Profileitemspan>
                    4444 5555 6666
                  </Profileitem>
                  <Profileitem>
                    <Profileitemspan>Email</Profileitemspan>
                    arwa.ragb22@gmail.com
                  </Profileitem>
                  <Profileitem>
                    <Profileitemspan>Website</Profileitemspan>
                    <Profileitemspanweb>www.google.com</Profileitemspanweb>
                  </Profileitem>
                </Profilelist>
              </Profile>

              <Skills>
                <Maintitle>
                  Some <Maintitlespan>skills</Maintitlespan>
                </Maintitle>
                <Skillsdesc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  praesentium blanditiis esse cupiditate, omnis similique.
                </Skillsdesc>
                <Bar >
                  <Title>html</Title>
                  <PERC>80%</PERC>
                  <Parent>
                    <Parentspan one="1"></Parentspan>
                  </Parent>
                </Bar>

                <Bar one="2">
                  <Title>css</Title>
                  <PERC>70%</PERC>
                  <Parent>
                    <Parentspan one="2"></Parentspan>
                  </Parent>
                </Bar>
                <Bar one="3">
                  <Title>Bootstrap</Title>
                  <PERC>60%</PERC>
                  <Parent>
                    <Parentspan one="3"></Parentspan>
                  </Parent>
                </Bar>
              </Skills>
            </Container>
          </Profileskills>
        );
    }
}

export default PROFILE;