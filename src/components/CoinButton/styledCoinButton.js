import styled from 'styled-components';

const CoinBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: center;
  position: relative;
`;

const Coin = styled.img`
  cursor: pointer;
  margin-top: -2.5em;
  max-width: 100%;
  width: ${(props) => props.coinSize / 1.2}%;
`;

const CoinStock = styled.button`
  border: 2px solid #e96969;
  bottom: 0;
  color: #e96969;
  cursor: pointer;
  font-weight: bold;
  position: absolute;
  text-align: center;
`;

export { CoinBox, Coin, CoinStock };