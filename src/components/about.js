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
                <p>I'm a <span>full stack web developer</span> with a focus on front-end
                 expierence in React, Javascript, HTML, CSS, and Less</p>
                 <div className="text-img">
                     <img src={frontendStack} alt="Ftont end stack logos for JS, HTML and CSS"/>
                     <img id="java" src={java} alt="Java logo"/>
                 </div>
                 <p>
                    My backend experience is in Java with data base management in postgreSQL
                 </p>
            </div>
        </StyledAbout>
    )
}
export default About

const StyledAbout = styled.div`
font-family: "Montserrat", sans-serif;
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
padding: 4%;
border-radius: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
`