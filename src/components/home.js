import React from 'react';
import styled from 'styled-components';

function Home(){
    return(
        <HomeStyle>
            <h1>Jamie Jenks</h1>
            <h3 id="one">Full</h3>
            <h3 id="two">Stack</h3>
            <h3 id="three">Developer</h3>
        </HomeStyle>
    )
}
export default Home

const HomeStyle = styled.div`

@keyframes onLoad {
    from{opacity: 0;
        padding-top: 10%;}
    to{opacity: 1;
        padding-top: 0;}
}

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


h1, h2, h3{
    font-family: 'Playfair Display', serif;
    padding: 2%;
    opacity: 0;
}

h1{
    text-align: center;
    width: 100%;
    font-size: 4rem;
    padding: 0;
    margin: 0;
    animation-name: onLoad;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}
#one{
    animation-name: onLoad;
    animation-delay: .5s;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}
#two{
    animation-name: onLoad;
    animation-delay: 1s;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}
#three{
    animation-name: onLoad;
    animation-delay: 1.5s;
    animation-duration: 2s;
    animation-fill-mode: forwards;
}

@media only screen and (max-width: 1350px){
    color: white;
}
`