import styled from 'styled-components';

const HeaderBox = styled.div`
  align-items: center;
  background-color: #e96969;
  display: flex;
  height: 70px;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  & h1 {
    color: white;
    font-family: Montserrat, Helvetica, sans-serif;
    font-weight: 300;
    margin: 0px;
  }
  @media only screen and (max-width: 500px) {
    justify-content: flex-start;
    & h1 {
      padding-left: 1em;
    }
  }
`;

const LoginButton = styled.button`
  border: 2px solid #ffffff;
  color: #ffffff;  
  position: fixed;
  right: 1.5em;  
`;

export { HeaderBox, LoginButton }