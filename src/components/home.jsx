import React from 'react';
import { HomeStyle } from '../styles/homeStyled';

function Home(){
    return (<HomeStyle>
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
        </HomeStyle>)
}
export default Home