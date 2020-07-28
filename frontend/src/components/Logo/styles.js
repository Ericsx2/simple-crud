import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: logo;

  background-color: var(--bg-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow);
  z-index: 2;

  img {
    padding: 0px 15px;
    width: 100%;
  }

`;
