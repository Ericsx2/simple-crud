import styled from 'styled-components';

export const Container = styled.div`
    margin: 0;
    display: grid;
    grid-template-columns: var(--aside-width) 1fr;
    grid-template-rows: 
        var(--header-height)
        1fr
        var(--footer-heigth);
    grid-template-areas:
        "logo header"
        "menu content"
        "menu footer";
    height: 100vh;
    background-color: #f5f5f5;

    
`;

