import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavStyled } from '../styles/navStyled';

function Navigation(){
    const navigate = useNavigate()
    
    function handleNavigate(e){
        console.log(e)
        if(e.target.id === 'home'){
            navigate("/");
        }
        else{
            navigate(`/${e.target.id}`);
        }
    }


    return(
        <NavStyled>
            <ul>
                <li onClick={handleNavigate} id="home">Home</li>
                <li onClick={handleNavigate} id="contact">Contact</li>
                <li onClick={handleNavigate} id="projects">Projects</li>
            </ul>
        </NavStyled>
    )
}

export default Navigation