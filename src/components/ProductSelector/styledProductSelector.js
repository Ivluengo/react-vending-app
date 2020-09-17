import styled, { keyframes } from 'styled-components';

const ProductSelectorBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  margin: 0 0 2em;
`;

const animateTitle = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const StepTitle = styled.h2`
  animation: ${ animateTitle } 1s infinite ease-in-out;
  height: 25px;

  &.stepTwo::after {
    background-color: #e96969;
    content: '';
    display: ${ (props) => ( props.children ? 'block' : 'none' ) };
    height: 2px;
    margin: 0 auto;
    min-width: 300px;
    width: 50vw;
  }
`;

export { ProductSelectorBox, StepTitle };