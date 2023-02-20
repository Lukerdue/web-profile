import React, { useState } from 'react';
import { ContactStyle } from '../styles/contactStyled';
 function Contact(){
    const [animation, setAnimation] = useState('loadin .8s ease-in-out forwards')

    return(
    <ContactStyle animation={animation}>
        <div className="contact-wrap">
            <div className="title">
                <h1>Say<br/><span className="hello">Hello</span></h1>
                <img className="wave" src={require('../img/wave.png')} alt="wave hello!" />
            </div>
            <div className="icons-wrapper">
                <div className="method linked">
                    <a href="https://linkedin.com/in/jamiejenksdev/">
                        <img src={require('../img/linkedin.png')} alt="linkedin" />
                    </a>
                </div>
                <div className="method git">
                    <a href="https://github.com/Lukerdue/">
                        <img src={require("../img/github.png")} alt="Github" />
                    </a>
                </div>
                <div className="method email">
                    <a href="mailto:jamielynjenks@gmail.com">
                        <img src={require("../img/gmail.png")} alt="e-mail" />
                    </a>
                </div>
            </div>
            <div className="txt">
                <p>Hello! I'm Jamie Jenks, I'm a full stack web developer.<br/>
                Feel free to reach out to me about anything, I love to chat and meet new people.
                The best way to reach me is to just <a href="https://linkedin.com/in/jamiejenksdev/">shoot me a message on Linkedin </a>
                or send me an email! Either way I'll be sure to get back to you soon.<br/><br/> Thank you!</p>
                <p><a href="mailto:jamielynjenks@gmail.com">jamielynjenks@gmail.com</a></p>
            </div>
        </div>
    </ContactStyle>)
 }
 export default Contact