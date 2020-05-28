import React, { Component } from 'react'
import '../App.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import img1 from '../assets/Home/CQI3.jpg'
import img2 from '../assets/Home/ConnUHacks.jpg'
import img3 from '../assets/Home/AgnicoEagle.jpg'


export default class home extends Component {
    render() {
        return (
            <Carousel controls={true} touch={false}>
                <Carousel.Item>
                    <Image className="slide" src={img1} fluid />

                    <Carousel.Caption>
                        <h2><i>Hi I'm</i></h2>
                        <h1 className="name">Rahul Behal</h1>
                        
                        <Button className="view" variant="light" href="https://1drv.ms/b/s!Aoz-Vqsx3JMGgcth1GGAzvtPqqmUew" target="_blank">
                            View CV&nbsp;&nbsp;
                            <i class="fas fa-download"></i>
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Image className="slide" src={img2} fluid />
                        
                    <Carousel.Caption>
                        <h1 className="projectIntro">
                            Checkout what I've worked on!&nbsp;&nbsp;     
                        </h1>

                        <Button className="view" variant="light" href="https://www.google.ca/">
                            View Projects&nbsp;&nbsp;
                            <i class="fas fa-database"></i>
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Image className="slide" src={img3} fluid />

                    <Carousel.Caption>
                        <h1 className="jobIntro">I'm always looking for exciting opportunities!&nbsp;&nbsp;</h1>
                        <Button className="view" variant="light" href="https://www.google.ca/">
                            View Work Experience&nbsp;&nbsp;
                            <i class="fas fa-briefcase"></i>
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
