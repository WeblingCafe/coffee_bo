"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, menu, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        text-decoration: none;
    }
    html {
        /* rem으로 사용을 위한 폰트 사이즈 비율로 맞추기*/
        font-size: 62.5%;
    }
/* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
        display: block;
    }
/* HTML5 hidden-attribute fix for newer browsers */
    *[hidden] {
        display: none;
    }

    body {
        line-height: 1;
        background-size: cover;
        overflow-x: hidden;
    }

    menu, ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
    content: '';
    content: none;
    }

    table {
         border-collapse: collapse;
         border-spacing: 0;
    }

    * {
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        font-family: 'Pretendard', sans-serif;
    };

    #root {
        width: 100%;
        height: 100%;
    }

    button,
    input,
    textarea {
        outline: none;
        border: none;
        background: none;
        font-family: inherit;
        resize: none;
        padding: 0;
    }

    button,
    label {
        cursor: pointer;
    };

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h4 {
        font-size: 1.2rem;
    }

    h5 {
        font-size: 1.1rem;
    }
    h6 {
        font-size: 1rem;
    }

    ol,
    ul {
        list-style: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a, button {
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: black;
        &:visited{
            text-decoration: none;
        }
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/Pretendard-Regular.woff2') format('woff2'),
            url('/fonts/Pretendard-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/Pretendard-Bold.woff2') format('woff2'),
            url('/fonts/Pretendard-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }
`;

export default GlobalStyle;
