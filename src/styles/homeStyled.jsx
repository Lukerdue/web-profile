import React from 'react';
import styled from 'styled-components';

export const HomeStyle = styled.div `
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    background-color: #121212;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .titles{
        width: 30%;
        display: flex;
        flex-direction: column;
        margin: 0;
    }
    .titles > h1, .titles > h2{
        color: white;
        max-width: 100%;
    }
    /* moon stuff */
    .moonwrapper{
        display: block;
        width: 50%;
        height: 100%;
        padding-top: 10%;
    }
    .actualmoon{
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-color: #ccd3ff;
        display: flex;
        box-shadow: 0 0 120px white;
    }
    .crater{
        border-radius: 50%;
        background-color: #b2bcf7;
    }
    .stacked{
        display: flex;
        flex-direction: column;
        align-items: space-evenly;
        justify-content: space-evenly;
    }
    .one{
        height: 45px;
        width: 45px;
        margin-left: 35px;
        margin-top: 45px;
    }
    .three{
        height: 15px;
        width: 15px;
        margin-top: 15px;
        margin-left: 20px;
    }
    .two{
        height: 20px;
        width: 20px;
        margin-top: 155px;
    }
    .four{
        height: 30px;
        width: 30px;
    }
    .five{
        height: 40px;
        width: 40px;
        margin-top: 80px;
    }
    .six{
        height: 40px;
        width: 40px;
    }
`