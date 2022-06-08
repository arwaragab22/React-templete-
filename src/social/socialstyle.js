import styled from "styled-components";
export const Socialmedia = styled.div`
  
    height: auto;
    overflow: hidden;
  `

export const Socials = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background: ${(props) =>
    props.first === 0
        ? "#3b5998" : (props) => (props.first === 1 ? "#498cbf" : " #cc2127")};
        
  @media (max-width: 991px) {
    
      width: 100%;
      float: none;
    display:flex;
    flex-direction:column;
    align-items:center
  
  }
      
`;



export const Socialicon = styled.i`
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: red;
  float: left;
  margin-right: 10px;
  margin-top: 23px;
  &:hover {
  
    color:black
  }
`;

export const Socialp= styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
  `

export const Socialspan = styled.span`
    display: block;
    margin-bottom: 8px;
  `

export const Socialinfo = styled.div`
    font-weight: normal;
  `
