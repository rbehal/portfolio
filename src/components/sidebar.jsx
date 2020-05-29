import React, { Component } from 'react'
import '../App.css';

import {Nav} from "react-bootstrap";
import Image from 'react-bootstrap/Image'

import img1 from '../assets/Sidebar/headshot.png'



export default class sidebar extends Component {
    render() {
        return (

            <div className="sidebar">
                <ul>
                    <li> 
                        <Image className="headshot" src={img1} roundedCircle /> 
                    </li>
                    
                    <li>
                        <h1 className="sidebarName">Rahul Behal</h1>
                    </li>

                    <li>
                        <p><i class="fas fa-envelope"></i>&nbsp;RahulBehal01@hotmail.com</p>
                    </li>

                    <li>Introduction</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Work Experience</li>
                    <li>Contact</li>

                    <div className="icons"> 
                        <li><a href="https://www.linkedin.com/in/rbehal01/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x"></i></a></li>
                        <li><a href="https://github.com/rbehal/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x"></i></a></li>
                    </div>
                </ul>
            </div>
        )
    }
}
