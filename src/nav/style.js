import styled from "styled-components";
import { Link } from "react-router-dom";
export const Navsec = styled.div`
  padding: 10px 0;
  overflow: hidden;
  background: #fff;
  position: relative;


`;

export const Logo = styled.div`
  width: 50%;
  float: left;
  @media (max-width: 1000px) {
    width: 100%;
   
  }
`;

export const Logotext = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: ##eb5424;
  text-align: start;
  text-transform: capitalize;
  @media (max-width: 1000px) {
    width: 100%;
    text-align: center;
  }
`;

export const Ullist = styled.ul`
  width: 50%;
  float: left;
  list-style: none;
  padding: 0px ;
  @media (max-width: 1000px) {
    width: 100%;
   
  }
`;

export const Ulitem = styled.li`
  display: inline-block;
`;

export const Ula = styled.a`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover {
    color: #eb5424;
  }
`;

export const Ullink = styled(Link)`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover {
    color: #eb5424;
  }
`;