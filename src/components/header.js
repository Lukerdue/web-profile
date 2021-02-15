import React from 'react';
import styled from 'styled-components';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import email from '../img/email.png';
import {AnimatedGradient} from './animatedGradient'

function Header(){
    return(
        
        <StyledHeader>
            <nav>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
            </nav>
            <div className="socials">
                <img src={github}/>
                <img src={linkedin}/>
                <img src={email}/>
            </div>
        </StyledHeader>
    )
}
export default Header

const StyledHeader = styled.header`

@keyframes grow{
    from{width: 7.5%};
    to{width: 9%};
}
@keyframes out{
    from{width: 9%};
    to{width: 7.5%};
}

display: flex;
width: 100%;
margin: 0;
padding: 0;
justify-content: space-evenly;
align-items: center;
height: 10vh;
font-family: "Montserrat", sans-serif;

.socials{
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img{
        width: 7.5%;
        animation-name: out;
        animation-fill-mode: forwards;
        animation-duration: .2s;
    }
}
img:hover{
    cursor: pointer;
    animation-name: grow;
    animation-duration: .3s;
    animation-fill-mode: forwards;
}
nav{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a{
        text-decoration: none;
        color: inherit;
    }
}
nav a:hover{
    color: gray;
    cursor: pointer;
}
`