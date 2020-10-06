import React, { Component } from 'react'
import '../App.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Image from 'react-bootstrap/Image'
import img1 from '../assets/Work/Agnico.png'
import img2 from '../assets/Work/Siemens.png'
import img3 from '../assets/Work/Neat.png'



export default class work extends Component {
    render() {
        return (
            <div id="work">
                <h1>Work Experience</h1>
                <Container fluid>
                    <Row id="work-experience" className="row align-items-center">
                        <Col className="col-md-3 col-sm-4 px-0">
                            <Image className="work-logo" src={img3} />
                        </Col>
                        <Col className="col-md-9 col-sm-8 pl-5">
                            <h1 id="work-title">Neat</h1>
                            <h2 className="work-position">Full Stack Developer Intern</h2>
                            <h3 className="work-subheading">Montreal, Quebec &nbsp;&nbsp;&nbsp;&nbsp; Jun. 2020 - Aug. 2020</h3>

                            <p id="work-description">
                                Neat aims to accelerate innovation in organizations and accelerate the training process through a software solution that reduces redundancies and streamlines
                                workflow. I participate in weekly Agile scrum meetings and am assigned technical user stories to be completed. Neat uses Vue.JS for the frontend and Firebase
                                on the backend. As Neat is an early stage startup, I also have an input in all discovery and ideation meetings.
                            </p>
                        </Col>
                    </Row>
                    <Row id="work-experience" className="row align-items-center">
                        <Col className="col-md-3 col-sm-4 px-0">
                            <Image className="work-logo" src={img2} />
                        </Col>
                        <Col className="col-md-9 col-sm-8 pl-5">
                            <h1 id="work-title">Siemens</h1>
                            <h2 className="work-position">Chemical Engineering Intern</h2>
                            <h3 className="work-subheading">Toronto, Ontario &nbsp;&nbsp;&nbsp;&nbsp; May 2019 - Sep. 2019</h3>

                            <p id="work-description">
                                I conducted observational analyses in order to update all of the procedures (SOPs) for the high voltage equipment manufacturing plant at Trench Group. I also
                                assisted with various procedures in the Chemical Lab including differential scanning calorimetry, viscosity tests, and tensile tests. Additionally, I created
                                reports in Microsoft Excel based on key performance indicators such as the failure rate of reactors, coils, line traps, etc.
                            </p>
                        </Col>
                    </Row>
                    <Row id="work-experience" className="row align-items-center">
                        <Col className="col-md-3 col-sm-4 px-0">
                            <Image className="work-logo" src={img1} />
                        </Col>
                        <Col className="col-md-9 col-sm-8 pl-5">
                            <h1 id="work-title">Agnico Eagle Mines</h1>
                            <h2 className="work-position">Process Plant Engineering Intern</h2>
                            <h3 className="work-subheading">Rankin Inlet, Nunavut &nbsp;&nbsp;&nbsp;&nbsp; Jan. 2019 - May 2019</h3>

                            <p id="work-description">
                                Agnico Eagle Mines is one of the top gold mining companies in the country. I was responsible for developing operation and maintenance procedures (SOPs)
                                for any of the equipment in the entire process plant which includes the oxygen plant, the paste plant, the saline and effluent water treatment plants,
                                the power plant, and the refinery. I also worked closely with process plant trainers to develop training material for process plant workers. Additionally,
                                I designed the entire system for reports outlining and detailing employee eLearning statistics in Excel using VBA.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
