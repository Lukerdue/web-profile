import React from 'react';
import Navigation from './navigation';
import { ProjectStyle } from '../styles/projectStyled'

function Projects(){
    return(<ProjectStyle>
        <Navigation />
        <div className="wrapper">
            <div className="text">
                <h1>Sorry!</h1>
                <h2>This page is still under construction!</h2>
                <p>In the meantime, here's a cute racoon for your troubles</p>
            </div>
        <img src={require('../img/racoon.png')} alt="Here's a racoon for your troubles"/>
        </div>
    </ProjectStyle>)
}
export default Projects