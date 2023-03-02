import React from 'react';
import styled from 'styled-components';

export const ContactStyle = styled.div`
    @keyframes loadin {
        0%{
            margin-top: 80vh;
            opacity: 0;
        }
        100%{
            margin-top: 0;
            opacity: 1;
        }
    }

    @keyframes unload {
        0%{
            margin-top: 0;
        }
        100%{
            margin-top: 80vh;
            opacity: 0;
        }
    }

    @keyframes wave {
        0%{
            height: 1px;
            width: 1px;
            margin-bottom: 0;
        }
        12%{
            height: auto;
            width: 23%;
            margin-bottom: 15px;
            opacity: 1;
        }
        15%{
            width: 50px;
            margin-bottom: 0;
        }
        20%{
            transform: rotate(45deg);
        }
        25%{
            transform: rotate(-45deg);
        }
        30%{
            transform: rotate(45deg)
        }
        40%{
            transform: rotate(-45deg);
        }
        50%{
            transform: rotate(45deg);
        }
        75%{
            transform: rotate(-45deg);
        }
        100%{
            transform: rotate(70deg);
            opacity: 1;
        }
    }
    @keyframes icons {
        0%{
            padding-top: 100px;
            opacity: 0;
    }
    100%{
        opacity: 1;
        padding-top: 0;
    }

    }
    @keyframes text{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    height: 100vh;
    max-height: contain;
    overflow-y: hidden;
    animation: ${props => props.animation};
    display: flex;
    align-items: center;
    flex-direction: column;

    .contact-wrap{
        width: 75%;
        padding-top: 7vh;
        max-width: 1100px;
    }
    .title{
        width: 30%;
        display: flex;
        align-items: center;
    }
    h1{
        font-size: 1.5em;
        width: fit-content;
    }
    .hello{
        margin: 0;
        padding: 0;
        font-size: 2.3em;
        line-height: .75em;
    }
    .wave{
        opacity: 0;
        width: 20%;
        animation: wave 2s ease-in-out forwards;
        animation-delay: .4s;
        width: 50px;
    }
    .icons-wrapper{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        margin-top: 12vh;
        margin-bottom: 12vh;
    }
    .method{
        width: 15%;
        opacity: 0;
    }
    .linked{
        animation: icons .5s ease-in-out forwards;
        animation-delay: 1s;
    }
    .git{
        animation: icons .5s ease-in-out forwards;
        animation-delay: 1.4s;
    }
    .email{
        animation: icons .5s ease-in-out forwards;
        animation-delay: 2s;
    }
    .txt{
        opacity: 0;
        animation: text 1s ease-in-out forwards;
        animation-delay: 3s;
    }

    .txt a{
        color: #ccd3ff;
        text-decoration: none;
    }
    .txt a:hover{
        cursor: pointer;
        color: dodgerblue;
    }

    //Mobile View
    @media only screen and (max-width: 560px){
        .contact-wrap{
            width: 85%;
        }
        h1{
            font-size: 1.3em;
        }
        .hello{
            font-size: 2em;
        }
        .icons-wrapper{
            justify-content: space-between;
        }
        .method{
            width: 20%;
        }
        .txt{
            font-size: .9em
        }
    }
`