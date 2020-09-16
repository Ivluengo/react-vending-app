import styled from 'styled-components';

export const Product = styled.div`
  align-items: center;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em;
  padding: 2em 1em 1em;
  transition: 0.3s ease;
  opacity: 0.5;

  &.enabled {
    cursor: pointer;
    opacity: 1;
    &:hover {
      box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
  & img {
    height: 15vw;
    max-height: 130px;
  }
`;