import styled from "styled-components";
export const Creative = styled.div`
  height: 500px;
  background: url(${require(`../images/creative/about-bg.jpg`)});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const Creativeinfo = styled.div`
  padding-top: 20px;
  width: 50%;
  float: right;

  @media (max-width: 991px) {

      width: 100%;
      padding-top: 10px;
    
    

  
    
    
  }
`;

export const Creativinfotitle = styled.h2`
    font-weight: bold;
    font-size: 50px;
    margin:0px
  `
export const Creativeinfotitlespan = styled.span
   `
    font-weight: normal;
  `

export const Creativeh4 = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
  `

 export const Creativedesc = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;
  `

export const Creativea = styled.a`
    text-decoration: none;
  `
export const Container = styled.div`
  width:90%;
  margin:auto;
  padding:15px
`;

