import React from 'react';
import styled from 'styled-components';

export const NotFoundStyle = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    h1{
        padding-top: 25vh;
        font-size: 5em;
    }
    button{
        margin-top: 5vh;
        font-size: 1em;
        padding: 8px 35px;
        border-radius: 8px;
        border: 1px solid #ccd3ff;
    }
    button:hover{
        cursor: pointer;
        background-color: transparent;
        color: #ccd3ff;
    }
`