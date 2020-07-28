import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: menu;

  background-color: var(--bg-dark);
  box-shadow:
    2px 0 10px 0 rgba(0, 0, 0, 0.12)
    2px 0 15px 0 rgba(0, 0, 0, 0.09);
  
  a {
    display: block;
    text-decoration: none;
    color: #FFF;
    padding: 15px;
    font-weight: 300;
  }

  a:hover {
    background: linear-gradient(135deg, #07a7e3 0%, #32dac3 100%);
  }
`;
