import React, { Component } from 'react'
import '../App.css';

import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import img1 from '../assets/Home/CQI3.jpg'
import img2 from '../assets/Home/ConnUHacks.jpg'
import img3 from '../assets/Home/AgnicoEagle.jpg'



export default class home extends Component {
    render() {
        return (
            <div id="home">
                <Carousel controls={false} touch={false}>
                    <Carousel.Item>
                        <Image className="slide" src={img1} fluid />

                        <Carousel.Caption className="d-none d-sm-block">
                            <h2><i>Hi I'm</i></h2>
                            <h1 className="slide-name">Rahul Behal</h1>
                            
                            <Button className="view" variant="light" href="https://1drv.ms/b/s!Aoz-Vqsx3JMGi51lE2bbbIkOaeYDUg?e=aEaQyR" target="_blank">
                                View CV&nbsp;&nbsp;
                                <i className="fas fa-download"></i>
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image className="slide" src={img2} fluid />
                            
                        <Carousel.Caption className="d-none d-sm-block">
                            <h1 className="intro">
                                Checkout what I've worked on!&nbsp;&nbsp;     
                            </h1>

                            <Button className="view" variant="light" href="#projects">
                                View Projects&nbsp;&nbsp;
                                <i className="fas fa-database"></i>
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Image className="slide" src={img3} fluid />

                        <Carousel.Caption className="d-none d-sm-block">
                            <h1 className="intro">I'm always seeking exciting opportunities!&nbsp;&nbsp;</h1>
                            <Button className="view" variant="light" href="#work">
                                View Work Experience&nbsp;&nbsp;
                                <i className="fas fa-briefcase"></i>
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
