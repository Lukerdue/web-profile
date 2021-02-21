import React from 'react';
import firstSite from '../img/first-site.png';
import anywhereFitness from '../img/anywhere-fitness.png';
import jumpWebsite from '../img/jump-website.png';
import styled from 'styled-components';

function Projects(){
    return(
        <ProjectsStyled>
            <h2>Projects</h2>
            <div className="projects">
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
            </div>
        </ProjectsStyled>
    )
}
export default Projects

const ProjectsStyled = styled.div`
margin-top: 0;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 100%;
font-family: "Montserrat", sans-serif;
font-size: 90%;
align-items: center;

.projects{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

h2{
    font-size: 300%;
    color: black;
    padding: 0;
    margin-top: 3%;
}

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
@media only screen and (max-width: 1350px){
    max-width: 100%;
    padding: 0;
    h2{
        color: white;
    }

    .project{
        background-color: rgb(225, 233, 280, .8)
    }
}

@media only screen and (max-width: 950px){
    flex-direction: column;
    width: 100%;
    justify-content: center;
    h2{
        color: white;
    }
    .projects{
        width: 100%;
        flex-direction: column;
        .project{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-items: center;
            padding: 0;
            width: 100%;
            flex-direction: row;
            p{
                margin: 0;
                width: 50%;
            }

            img{
            width: 20%;
            }
            .links{
                width: 10%;
                display: flex;
                flex-direction: column;
                a{
                    margin-top: 15%;
                }
            }
        }
    }
}
@media only screen and (max-width: 635px){
    .links{
        font-size: 75%
    }
}
`