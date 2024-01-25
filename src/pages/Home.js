import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/home.css';
import About from "./About.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import Project from "./projects.js";

function Home(props) {
    
    let navigate = useNavigate();

    function handleClick(value) {
        navigate("/"+value);
    };

    return(
        <div className="home">
            <div className='fixed'>
                <div className='name'>
                    <a href="mailto:rvkrishna13@outlook.com">RAVI VENKATA KRISHNA</a>   
                </div>
                <div className='button'>
                    <button onClick={() => handleClick("")}>
                        <span className='button-text'>ABOUT</span>
                    </button>
                    <button onClick={() => handleClick("education")}>
                        <span className='button-text'>EDUCATION</span>
                    </button>
                    <button onClick={() => handleClick("projects")}>
                        <span className='button-text'>PROJECTS</span>
                    </button>
                    <button onClick={() => handleClick("experience")}>
                        <span className='button-text'>EXPERIENCE</span>
                    </button>
                </div>
            </div>
            
        <div className='split'>
            {props.state==="about" && <About />}
            {props.state==="education" && <Education />}
            {props.state==="project" && <Project />}
            {props.state==="experience" && <Experience />}
        </div>        
        
        </div>
    );
    
}

export default Home;