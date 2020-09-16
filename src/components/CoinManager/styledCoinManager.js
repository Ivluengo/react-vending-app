import styled from 'styled-components';

const CoinManagerBox = styled.div`
  align-items: center;
  border-bottom: 1px solid #f7f7f7;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 70px auto 1.5em;
  max-width: 600px;
  padding-bottom: 2em;
  width: 85vw;
  & .stepOne {
    flex: 100%;
  }
  & h2 {
    position: relative;

    &.stepOne::after {
      background-color: #e96969;
      content: '';
      display: block;
      height: 2px;
      margin: 0 auto;
      min-width: 250px;
      width: 50vw;
    }
  }
  & .allCoinsBox {
    display: flex;
    justify-content: center;
  }

  & .amountBox {
    align-items: center;
    display: flex;
    flex: 100%;
    justify-content: center;
    & h2 {
      font-size: 1.5em;
    }
  }
`;

const RefundButton = styled.button`
  border: 2px solid #e96969;
  margin-left: 1.5em;
`;

export { CoinManagerBox, RefundButton };