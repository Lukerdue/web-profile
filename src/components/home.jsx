import React from 'react';
import { useState } from 'react';
import { HomeStyle } from '../styles/homeStyled';
import { useNavigate } from 'react-router-dom';


function Home(){
    const [clicked, setClicked] = useState(``)
    const navigate = useNavigate();

    //The scroll animation
    function handleButton(e){
        e.preventDefault();
        document.addEventListener('animationend', (e) =>{navigate('/contact')})
        setClicked(`scroll .5s ease-in-out forwards`);
    }

    return (<HomeStyle className="home" clicked={clicked}>
            <div className="stars">
                <div className="star a"></div>
                <div className="star b"></div>
                <div className="star c"></div>
                <div className="star d"></div>
                <div className="star e"></div>
                <div className="star f"></div>
                <div className="star g"></div>
                <div className="star h"></div>
                <div className="star i"></div>
                <div className="star j"></div>
                <div className="star k"></div>
                <div className="star l"></div>
                <div className="star m"></div>
                <div className="star n"></div>
                <div className="star o"></div>
            </div>
            <div className="foreground">
            <div className="titles">
                <h1>Jamie Jenks</h1>
                <h2>Web Developer</h2>
            </div>
            <div className="moonwrapper">
                <div className="actualmoon">
                    <div className="crater one"></div>
                    <div className="crater two"></div>
                    <div className="crater three"></div>
                    <div className="stacked">
                        <div className="crater four"></div>
                        <div className="crater six"></div>
                    </div>
                    <div className="crater five"></div>
                </div>
            </div>
            <div className="buttonWrapper">
                <button onClick={handleButton}>Dive In</button>
            </div>
            <div className="sea">
                    <div className="blue1">
                        <div className="beams">
                            <div className="beam b1"></div>
                            <div className="beam b2"></div>
                            <div className="beam b3"></div>
                            <div className="beam b4"></div>
                            <div className="beam b5"></div>
                        </div>
                    </div>
                    <div className="blue2">
                        <div className="beams">
                            <div className="beam b3"></div>
                            <div className="beam b1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeStyle>)
}
export default Home