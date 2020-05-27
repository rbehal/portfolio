import React, { Component } from 'react'
import '../App.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

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
                                    <h3>First slide label</h3>
                                    <p>Nulla Description of image.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image className="slide" src={img2} fluid />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Description of image.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <Image className="slide" src={img3} fluid />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Description of image.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        )
    }
}
