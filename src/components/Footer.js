import React from 'react';
import styled from 'styled-components';


export default function Footer() {
  return (
    <FooterBox>
    </FooterBox>
  )
}

const FooterBox = styled.div`
  background-color: #E96969;
  height: 30px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999; 
`;