import React from 'react';
import styled from 'styled-components';
import frontendStack from '../img/frontend-stack.png';
import java from '../img/java.png'
import me from "../img/me.png";

function About (){
    return(
        <div>
            <div className="img-wrapper">
                <img src={me} alt="Jamie Jenks"/>
            </div>
            <div className="text-wrapper">
                <p>I'm a <span>full stack web developer</span> with a focus on front-end
                 expierence in React, Javascript, HTML, CSS, and Less</p>
                 <div className="text-img">
                     <img src={frontendStack} alt="Ftont end stack logos for JS, HTML and CSS"/>
                     <img src={java} alt="Java logo"/>
                 </div>
                 <p>
                    My backend experience is in Java with data base management in postgreSQL
                 </p>
            </div>
        </div>
    )
}
export default About