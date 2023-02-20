import React from 'react';
import styled from 'styled-components';

export const ProjectStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    .wrapper{
        width: 75%;
        max-width: 1000px;
        padding-top: 10vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1{
        font-size: 4em;
        text-align: center;
    }
    h2{
        font-size: 2em;
    }
    img{
        width: 15%;
        padding-top: 15vh;
    }
`