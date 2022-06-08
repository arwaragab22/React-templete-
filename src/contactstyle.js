import styled from "styled-components";


export const Drop=styled.div`
    padding: 10px 0;

    text-align: center
`

export const Droptitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px;
    color: #3A5BA0;
    text-transform:uppercase
`;

export const Droptitlespan=styled.span`
    font-weight: normal
`

export const Dropform=styled.form`
    width: 70%;
    margin: auto;
`

export const Dropinput=styled.div`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
`
export const Dropformminput=styled.input`
    overflow: hidden;
`

export const Input = styled.input`
  width: 49%;
  padding: 8px;
  margin-top: 30px;
  border: none;
  border-bottom: 2px solid #FFA500;
  outline: none;
`;

export const Inputtext=styled(Input)`
  
`

export const Inputemail=styled(Input)`
  
`
export const sup=styled.div`
    width: 100%;
`

export const  Textarea=styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc
    padding:20px
`

export const Inputsubmit = styled(Input)`
    width: 30%;
    background: #3A5BA0;
    border: 1px solid #ccc;
    color: white;
    cursor: pointer;
    font-size:20px;
    text-transform:uppercase;
    border-radius:6px
`;
