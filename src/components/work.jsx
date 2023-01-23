import React, { Component } from 'react'
import '../App.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Image from 'react-bootstrap/Image'
import agnicoLogo from '../assets/Work/Agnico.png'
import siemensLogo from '../assets/Work/Siemens.png'
import neatLogo from '../assets/Work/Neat.png'
import scotiaLogo from '../assets/Work/Scotiabank.png'
import amazonLogo from '../assets/Work/Amazon.png'

export default class work extends Component {
    render() {
        return (
            <div id="work">
                <h1>Work Experience</h1>
                <Container fluid>
                    <Row id="work-experience" className="row align-items-center">
                        <Col className="col-md-3 col-sm-4 px-0">
                            <Image className="work-logo" src={amazonLogo} />
                        </Col>
                        <Col className="col-md-9 col-sm-8 pl-5">
                            <h1 id="work-title">Amazon</h1>
                            <h2 className="work-position">Software Development Engineer</h2>
                            <h3 className="work-subheading">Vancouver, British Columbia &nbsp;&nbsp;&nbsp;&nbsp; Aug. 2022 - Present</h3>

                            <p id="work-description">
                                At Amazon, I worked within the Selling Partner Experience (SPX) organization to deliver products designed to maximize seller efficiency and minimize frustration.
                                I took on a wide array of responsibilities, including designing technical architecture for products along with setup of AWS infrastructure including Lambda, S3, DynamoDB, etc.
                                I was also continuously coordinating across several lines of the business (PM, DE, BA, etc.) to ensure success criteria of products could be evaluated.
                                In my first 4 months at the company, I merged 50+ pull requests with an average of less than 1 revision and few comments.
                            </p>
                        </Col>
                    </Row>                    
                    <Row id="work-experience" className="row align-items-center">
                        <Col className="col-md-3 col-sm-4 px-0">
                            <Image className="work-logo" src={scotiaLogo} />
                        </Col>
                        <Col className="col-md-9 col-sm-8 pl-5">
                            <h1 id="work-title">Scotiabank</h1>
                            <h2 className="work-position">Investment Banking Summer Analyst</h2>
                            <h3 className="work-subheading">Toronto, Ontario &nbsp;&nbsp;&nbsp;&nbsp; May 2021 - Aug. 2021</h3>

                            <p id="work-description">
                                At Scotiabank, I worked within the Equity Capital Markets and Mining coverage groups dealing with both origination and execution services.
                                I was involved in several deals and projects concerning debt/equity financing, mergers and acquisitions, and business development.
                                I was also responsible for performing complex financial analysis such as market comparisons, company valuations, and pro-forma financial modelling.
                                Additionally, I contributed to preparing company and industry specific research to support financial valuations and pitchbook charts/tables.
                            </p>
                        </Col>
                    </Row>                    
                    <Row id="work-experience" className="row align-items-center">
                        <Col className="col-md-3 col-sm-4 px-0">
                            <Image className="work-logo" src={neatLogo} />
                        </Col>
                        <Col className="col-md-9 col-sm-8 pl-5">
                            <h1 id="work-title">Neat</h1>
                            <h2 className="work-position">Full Stack Developer Intern</h2>
                            <h3 className="work-subheading">Montreal, Quebec &nbsp;&nbsp;&nbsp;&nbsp; Jun. 2020 - Aug. 2020</h3>

                            <p id="work-description">
                                Neat aims to accelerate innovation in organizations and accelerate the training process through a software solution that reduces redundancies and streamlines
                                workflow. I participated in weekly Agile scrum meetings and was assigned technical user stories to be completed. Neat uses Vue.JS for the frontend and Firebase
                                on the backend. As Neat is an early stage startup, I also had an input in all discovery and ideation meetings.
                            </p>
                        </Col>
                    </Row>
                    <Row id="work-experience" className="row align-items-center">
                        <Col className="col-md-3 col-sm-4 px-0">
                            <Image className="work-logo" src={siemensLogo} />
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
                            <Image className="work-logo" src={agnicoLogo} />
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
