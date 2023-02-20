import React from 'react';
import Navigation from './navigation'
import { useNavigate } from 'react-router-dom';

function NotFound(){
    const navigate = useNavigate()

    function returnHome(e){
        e.preventDefault();
        navigate("/");
    }

    return(<div>
        <Navigation/>
        <h1>OOPS...</h1>
        <p>Looks like the page you were looking for doesn't exist! (how'd you get here anyway?)</p>
        <button onClick={returnHome}>Return Home</button>
    </div>)
}
export default NotFound