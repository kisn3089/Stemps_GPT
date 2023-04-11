import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

    body {
        background-color: #111;
        color: #d9d9e3;
        display: flex;
        justify-content: center;
    }

    body::-webkit-scrollbar {
        display: none;
    }

    input, button {
        outline: none;
        border: none;
    }
`;

export const MainContainer = styled.div`
  width: 100vw;
`;
