import React from 'react';
import styled from 'styled-components';

export const NavStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ul{
        width: 75%;
        list-style-type: none;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    li:hover{
        cursor: pointer;
        color: dodgerblue;
    }
`