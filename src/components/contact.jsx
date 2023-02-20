import React from 'react';
 function Contact(){
    return(<div>
        <h1>Contact me!</h1>
        <div className="icons-wrapper">
            <div className="method">
                <a href="https://linkedin.com/in/jamiejenksdev">
                    <img src={require('../img/linkedin.png')} alt="linkedin" />
                </a>
            </div>
            <div className="method">
                <a href="https://github.com/Lukerdue">
                    <img src={require("../img/github.png")} alt="Github" />
                </a>
            </div>
            <div className="method">
                <a href="mailto:jamielynjenks@gmail.com">
                    <img src={require("../img/gmail.png")} alt="e-mail" />
                </a>
            </div>
        </div>
        <div className="txt">
            <p>Jamie Jenks</p>
            <p><a href="tel:2084212696">+12084212696</a></p>
            <p><a href="mailto:jamielynjenks@gmail.com">jamielynjenks@gmail.com</a></p>
        </div>
    </div>)
 }
 export default Contact