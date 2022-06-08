import styled from "styled-components";
 export const Work = styled.div`
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff
    display :flex
      flex-wrap: wrap;

`;
export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
export const Worktitle =styled.h2`
    font-size: 60px; 
`

  export const Workspan =styled.span`
    font-weight: normal
`

  export const Part = styled.div`
    margin-top: 20px;
    width: 350px;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: ${(props) => (props.first === 0 ? "0%" : "5%")};

    @media (max-width: 1290px) {
      width: 70%;
      margin-left: 0px;
      margin-left: 0;
    }
  `;



export const Icon =styled.i`
    color: #888;
    margin-bottom: 20px
`

  export const Parttitle =styled.h4`
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
`

  export const Line =styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

  export const Partdesc=styled.p`
    font-size: 14px;
    color: #888;
    padding: 20px
`