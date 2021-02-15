import styled from 'styled-components';

export const AnimatedGradient = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    background: linear-gradient(300deg, #f53dff, #25c7ec, #f3bf1c);
    background-size: 400% 400%;

    -webkit-animation: AnimationName 15s ease infinite;
    -moz-animation: AnimationName 15s ease infinite;
    animation: AnimationName 15s ease infinite;


@-webkit-keyframes AnimationName {
    0%{background-position:0% 90%}
    50%{background-position:100% 11%}
    100%{background-position:0% 90%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 90%}
    50%{background-position:100% 11%}
    100%{background-position:0% 90%}
}
@keyframes AnimationName {
    0%{background-position:0% 90%}
    50%{background-position:100% 11%}
    100%{background-position:0% 90%}
}
`