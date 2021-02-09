import React from 'react';
import styled from 'styled-components';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import email from '../img/email.png';

function Header(){
    return(
        <StyledHeader>
            <nav>
                <a>Projects</a>
                <a>About</a>
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
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
height: 10vh;
font-family: "Montserrat", sans-serif;

.socials{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
nav{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
`