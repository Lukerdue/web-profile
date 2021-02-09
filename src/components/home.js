import React from 'react';
import styled from 'styled-components';

function Home(){
    return(
        <HomeStyle>
            <h1>Jamie Jenks</h1>
            <h3>Inspirator</h3>
            <h3>Industrious</h3>
            <h3>Developer</h3>
        </HomeStyle>
    )
}
export default Home

const HomeStyle = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h1, h2, h3{
    font-family: 'Playfair Display', serif;
    padding: 2%;
}
h1{
    text-align: center;
    width: 100%;
    font-size: 4rem;
    padding: 0;
    margin: 0;
}
`