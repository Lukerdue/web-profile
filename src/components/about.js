import React from 'react';
import styled from 'styled-components';
import frontendStack from '../img/frontend-stack.png';
import java from '../img/java.png'
import me from "../img/me.jpg";

function About (){
    

    return(
        <StyledAbout>
            <div className="img-wrapper">
                <img src={me} alt="Jamie Jenks"/>
            </div>
            <div className="text-wrapper">
                <p>I'm a <span>full stack web developer</span> with most of my front-end
                 expierence in React, Javascript, HTML, CSS, and Less.<br/>
                 My backend experience is in Java.
                 </p>
                 <div className="text-img">
                     <img src={frontendStack} alt="Ftont end stack logos for JS, HTML and CSS"/>
                     <img id="java" src={java} alt="Java logo"/>
                 </div>
                 <p>
                    I learned to code during the 2020 COVID-19 lockdown with Lambdaschool. Lambda not only taught me to code, but taught me how to grow and succeed.
                    Two years ago I worked as a Lighting Designer at a small local theatre and now I can take designers' visions and breathe life into them through web development.
                 </p>
            </div>
        </StyledAbout>
    )
}
export default About

const StyledAbout = styled.div`
font-family: "Montserrat", sans-serif;
font-size: 85%;
display: flex;
justify-content: space-evenly;
align-items: center;
width: 90%;
height: 70vh;

span{
    font-weight: bolder;
}
img{
 width: 100%;
}

.text-wrapper{
background-color: rgb(225, 243, 280, .5);
width: 40%;
padding: 2%;
border-radius: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
}

.img-wrapper{
    width: 15%;
    
    img{
        border-radius: 5px;
    }
}

.text-img{
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img{
        width: 50%;
    }

    #java{
        width: 20%;
    }
}
@media only screen and (max-width: 1350px){
    .img-wrapper img{
        border: 4px solid white;
    }

    .text-wrapper{
        background-color: rgb(225, 233, 280, .7);
    }
}

@media only screen and (max-width: 900px){
    width: 100%;
    background-color: rgb(225, 233, 280, .7);
    .text-wrapper{
        width: 65%;
     background-color: transparent;   
    }
}
`