import React from 'react';
import firstSite from '../img/first-site.png';
import anywhereFitness from '../img/anywhere-fitness.png';
import jumpWebsite from '../img/jump-website.png';
import styled from 'styled-components';

function Projects(){
    return(
        <ProjectsStyled>
            <div className="project">
                <img src={firstSite}/>
                <p>This was my first resume portfolio site. This one is pure HTML and CSS/Less and it was the first project I designed and coded from scratch by myself.
                    Later in my Lambda career I used it as my test to deploy a static website, and for that I used Vercel.
                </p>
                <div className="links">
                    <a href="https://first-personal-site-g8l81zytl.vercel.app/">Full site</a>
                    <a href="https://github.com/Lukerdue/first-deploy">Github</a>
                </div>
            </div>
            <div className="project">
                <img src={anywhereFitness}/>
                <p>Anywhere fitness was a project I did while in Lambdaschool with two other developers. The goal was to create a fitness webpage that would solve the problem
                    of people not having access to a gym or if they didn't like the gym atmosphere then trainers could host outdoor classes or classes "anywhere". We built this in one week
                    during February 2021. We used React for this one, and connected to a prebuilt Rest API backend. This one is deployed as a site on Heroku.
                </p>
                <div className="links">
                    <a href="https://fitness-anywhere-bw.herokuapp.com/">Full Site</a>
                    <a href="https://github.com/Anywhere-fitness-bw-feb21/frontend">Github</a>
                </div>
            </div>
            <div className='project'>
                <img src={jumpWebsite}/>
                <p>
                    This project is a site that I'm currently working on, its all volunteer work on my part for a local youth theatre company. At the end the goal is to donate the finished site
                    to the company. This one is React as well, and then the backend will be in Java.
                </p>
                <div className="links">
                    <a href="https://github.com/Lukerdue/JuMPco">Github</a>
                </div>
            </div>
        </ProjectsStyled>
    )
}
export default Projects

const ProjectsStyled = styled.div`
margin-top: 8%;
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
font-family: "Montserrat", sans-serif;
font-size: 90%;

img{
    width: 95%;
}
.links{
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
.project{
    width: 20%;
    background-color: rgb(225, 243, 280, .5);
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
a{
    text-decoration: none;
    color: inherit;
    border: 1px solid black;
    padding: 3%;
}
a:hover{
    color: white;
    cursor: pointer;
    border-color: white;
    background-color: gray;
}
`