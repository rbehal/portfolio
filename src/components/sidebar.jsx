import React, { Component } from 'react'
import '../App.css';

import Image from 'react-bootstrap/Image'
import img1 from '../assets/Sidebar/headshot.png'

// import ScrollspyNav from "react-scrollspy-nav";


export default class sidebar extends Component {
    render() {
        return (

            <div className="sidebar">
                <ul>
                    <li> 
                        <Image className="headshot" src={img1} roundedCircle /> 
                    </li>
                    
                    <li>
                        <h1 className="sidebar-name">Rahul Behal</h1>
                    </li>

                    <li>
                        <p><i class="fas fa-envelope"></i>&nbsp;RahulBehal01@hotmail.com</p>
                    </li>

                    {/* <ScrollspyNav
                        scrollTargetIds={["home", "about", "skills", "projects", "work", "contact"]}
                        offset={0}
                        activeNavClass="is-active"
                        scrollDuration="1000"
                        headerBackground="true"
                    > */}
                        <div className="quick-links">
                            <ul>
                            <li><a href="#home">Introduction</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#skills">Skills</a> </li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#work">Work Experience</a></li>
                            <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    {/* </ScrollspyNav> */}
            

                    <div className="icons"> 
                        <li><a href="https://www.linkedin.com/in/rbehal01/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x"></i></a></li>
                        <li><a href="https://github.com/rbehal/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x"></i></a></li>
                    </div>
                </ul>
            </div>
        )
    }
}
