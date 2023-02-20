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
    flex-wrap: wrap;
    
    //Handle click to scroll
    @keyframes scroll{
        0%{
            margin-top: 0;
            opacity: 1;
        }
        100%{
            margin-top: -75vh;
            opacity: 0;
        }
    }
    animation: ${props => props.clicked};
    .titles{
        height: fit-content;
        width: 40%;
        display: flex;
        flex-direction: column;
        margin: 0;
        margin-top: 15%;
        padding-left: 10%;
    }
    .titles > h1, .titles > h2{
        color: #ccd3ff;
    }
    .titles > h1 {
        font-size: 4em;
    }
    .titles > h2{
        font-size: 2em;
    }
    .foreground{
        margin-top: -100vh;
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 100vh;
        flex-wrap: wrap;
    }


    /* moon stuff */
    .moonwrapper{
        display: flex;
        width: 50%;
        padding-top: 10%;
        height: 100%;
        align-items: start;
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

    //star stuff
    .stars{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        height: 100vh;
    }
    .star{
        height: 3px;
        width: 3px;
        background-color: #ccd3ff;
    }
    .a{
        margin-top: 30px;
        margin-left: 50px;
    }
    .b{
        margin-top: 570px;
        margin-left: -3px;
    }
    .c{
        margin-top: 130px;
        margin-left: 40px;
    }
    .d{
        margin-top: 400px;
    }
    .e{
        margin-top: 350px;
    }
    .f{
        margin-top: 150px;
    }
    .g{
        margin-top: 37px;
    }
    .h{
        margin-top: 520px;
    }
    .i{
        margin-top: 50px;
    }
    .j{
        margin-top: 440px;
    }
    .k{
        margin-top: 620px;
    }
    .l{
        margin-top: 300px;
    }
    .m{
        margin-top: 150px;
    }
    .n{
        margin-top: 540px;
    }
    .o{
        margin-top: 87px;
    }

    //Button stuff
    @keyframes bhover{
        0%{
            background-color: transparent;
            color: #ccd3ff;
        }
        100%{
            background-color: #ccd3ff;
            color: #121212;
        }
    }
    .buttonWrapper{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: -19vh;
    }
    .buttonWrapper button{
        height: fit-content;
        background-color: transparent;
        border: 1px solid #ccd3ff;
        color: #ccd3ff;
        padding: 10px 70px;
        border-radius: 15px;
        z-index: 2;
        text-transform: uppercase;
        font-size: 1.4em;
    }
    .buttonWrapper button:hover{
        animation: bhover .2s ease-in-out forwards;
    }

    //sea stuff

    //ripple animation keyframes
    @keyframes ripple1 {
        0%{
            margin-left: 10px;
            margin-top: 10px;
        }
        100%{
            margin-left: 20px;
            margin-top: 8px;
        }
    }
    @keyframes ripple2 {
        0%{
            margin-left: 20px;
        }
        100%{
            margin-left: 30px;
        }
    }
    @keyframes ripple3 {
        0%{
            margin-left: 5px
        }
        100%{
            margin-left: 25px;
        }
    }
    @keyframes ripple4 {
        0%{
            margin-left: 30px;
        }
        100%{
            margin-left: 45px;
        }
    }
    @keyframes ripple5{
        0%{
            margin-left: 0;
        }
        100%{
            margin-left: 20px;
        }
    }

    //Sea-ss (get it css, sea-ss)
    .sea{
        margin-top: -13vh;
        width: 100vw;
        height: 13vh;;
        align-items: center;
        justify-content: center;
    }
    .blue1{
        margin: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 8vh;
        background-color:#0b183b; 
    }
    .blue2{
        margin: 0;
        width: 100%;
        height: 5vh;
        background-color: #050e26;
        display: flex;
        justify-content: center;
    }
    .beams{
        display: flex;
        flex-direction: column;
        width: 50%;
        padding-left: 32%;
    }
    .beam{
        height: 1vh;
        width: 100%;
        margin-top: .5vh;
        border-radius: 15px;
        background-color: #ccd3ff;
    }
    .b1{
        margin-left: 10px;
        animation: ripple1 2s ease-in-out infinite alternate-reverse;
    }
    .b2{
        margin-left: 20px;
        animation: ripple2 5s ease-in-out infinite alternate-reverse;
    }
    .b3{
        margin-left: 5px;
        animation: ripple3 3s ease-in-out infinite alternate-reverse;
    }
    .b4{
        margin-left: 30px;
        animation: ripple4 2s ease-in-out infinite alternate-reverse;
    }
    .b5{
        margin-left: 0;
        animation: ripple5 4s ease-in-out infinite alternate-reverse;
    }
`