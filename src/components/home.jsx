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
            <Container fluid>
                <Row className="row">
                    <Col className="col-10 offset-2 px-0 align-items-start">
                        <Carousel controls={false} touch={false}>
                            <Carousel.Item>
                                <Image className="slide" src={img1} fluid />

                                <Carousel.Caption>
                                    <h2><i>Hi I'm</i></h2>
                                    <h1 className="name">Rahul Behal</h1>
                                    
                                    <Button className="button2" variant="light" href="https://www.google.ca/" target="_blank">
                                        View CV&nbsp;&nbsp;
                                        <i class="fas fa-download"></i>
                                    </Button>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image className="slide" src={img2} fluid />
                                 
                                <Carousel.Caption>
                                    <h1 className="home">
                                        Checkout what I've worked on!&nbsp;&nbsp;     
                                        </h1>

                                        <Button className="button2" variant="light" href="https://www.google.ca/" target="_blank">
                                            View CV&nbsp;&nbsp;
                                            <i class="fas fa-download"></i>
                                        </Button>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image className="slide" src={img3} fluid />

                                <Carousel.Caption>
                                    <h2><i>Hi I'm</i></h2>
                                    <h1 className="name">Rahul Behal</h1>
                                    <Button className="button2" variant="light" href="https://www.google.ca/" target="_blank">
                                        View CV&nbsp;&nbsp;
                                        <i class="fas fa-download"></i>
                                    </Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        )
    }
}
