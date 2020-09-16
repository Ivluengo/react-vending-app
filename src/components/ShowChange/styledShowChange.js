import styled from 'styled-components';

const ChangeMessage = styled.div`
  border: ${ (props) => props.change.amount && '2px solid #e96969;' } 
  border-radius: 3px;
  margin: 0 auto;
  text-align: center;
  width: 80%;
  & ul {
    list-style: none;
    padding: 0;
    & li {
      font-size: 1.2em;
      font-weight: 300;
    }
  }
`;

export { ChangeMessage };