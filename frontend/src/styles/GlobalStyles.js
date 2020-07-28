import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
        --bg-dark: #1a2f3a;

        --logo-height: 100px;
        --header-height: 100px;
        --aside-width: 255px;
        --footer-heigth: 40px;

        --shadow: 0 2px 23px 0 rgba(0, 0, 0, 0.1), 0 2px 49px 0 rgba(0, 0, 0, 0.06);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Playfair Display', sans-serif;
        font-size: 1.05em;
    }
`;