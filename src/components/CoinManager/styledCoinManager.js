import styled from 'styled-components';

const CoinManagerBox = styled.div`
  align-items: center;
  border-bottom: 1px solid #f7f7f7;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 70px auto 1.5em;
  max-width: 800px;
  padding-bottom: 2em;
  width: 85vw;
  & h2 {
    flex: 100%;
    position: relative;

    &.stepOne::after {
      background-color: #e96969;
      content: '';
      display: block;
      height: 2px;
      margin: 0 auto;
      width: 400px;
    }
  }
  & .amountBox {
    display: flex;
    align-items: center;
  }
`;

const RefundButton = styled.button`
  border: 2px solid #e96969;
  padding: 0.5em;
  background-color: transparent;
  border-radius: 3px;
  margin-left: 1.5em;
  cursor: pointer;
`;

export { CoinManagerBox, RefundButton };