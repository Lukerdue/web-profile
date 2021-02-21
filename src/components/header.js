import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Header(){
    const history = useHistory();

    function useNav(e){
        e.preventDefault();
        history.push(e.target.name)
    }

    return(
        <StyledHeader>
                <nav>
                <a name="/" onClick={useNav}>Home</a>
                <a name="/projects" onClick={useNav}>Projects</a>
                <a name="/about" onClick={useNav}>About</a>
            </nav>
            <div className="socials">
            <FaGithubSquare className="icon"/>
            <FaLinkedin className="icon"/>
            <MdEmail className="icon"/>
            </div>
        </StyledHeader>
    )
}
export default Header

const StyledHeader = styled.header`
@keyframes onload{
    from{opacity: 0;}
    to{opacity: 1}
}

opacity: 0;
animation-name: onload;
animation-fill-mode: forwards;
animation-duration: 1s;
animation-delay: 3.2s;
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
    font-size: 200%;

    .icon:hover{
        color: gray;
        cursor: pointer;
    }
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

@media only screen and (max-width: 1350px){
    color: white;
}

@media only screen and (max-width: 1200px){    
        flex-direction: column;
        margin-top: 2%;

    .socials{
        margin-top: 2%;
        font-size: 170%;
        color: white;
    }
        
    nav{
        width: 50%;
    }
    nav a{
        color: white;

        :hover{
            color: gray;
        }
    }
}

`