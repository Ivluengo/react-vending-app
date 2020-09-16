import styled from 'styled-components';

export const HeaderBox = styled.div`
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
`;