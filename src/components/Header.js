import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  background-color: #E96969;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
    & h1 {
      color: white;
      font-family: Montserrat, Helvetica, sans-serif;
      font-weight: 300;
      margin: 0px;
    }
`;

export default function Header() {
  return (
    <HeaderBox>
      <h1>VendingApp</h1>
    </HeaderBox>
  )
}
