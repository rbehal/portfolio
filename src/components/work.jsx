import React from 'react';
import '../App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

import { workExperiences } from '../constants/workExperiences';
import { LAPTOP_SIZE } from '../constants/screenSizes';

export default function Work(props) {
    const { screenWidth } = props;

    function renderWorkExperience(exp) {
        const isSmallScreen = screenWidth < LAPTOP_SIZE;

        return (
            isSmallScreen ?
                <Row key={exp.company} id="work-experience" className="row align-items-center">
                    <Col className="col-md-6 col-sm-6 px-0">
                        <Image className="work-logo" src={exp.logo} />
                    </Col>
                    <Col className="col-md-6 col-sm-6 pl-2">
                        <h1 id="work-title">{exp.company}</h1>
                        <h2 className="work-heading">{exp.position}</h2>
                        <h3 className="work-heading">
                            {exp.location}
                        </h3>
                        <h3 className="work-heading">
                            {exp.date}
                        </h3>
                    </Col>
                </Row>
            :
                <Row key={exp.company} id="work-experience" className="row align-items-center">
                    <Col className="col-md-3 col-sm-4 px-0">
                        <Image className="work-logo" src={exp.logo} />
                    </Col>
                    <Col className="col-md-9 col-sm-8 pl-5">
                        <h1 id="work-title">{exp.company}</h1>
                        <h2 className="work-heading">{exp.position}</h2>
                        <h3 className="work-heading">
                            {exp.location} &nbsp;&nbsp;&nbsp;&nbsp; {exp.date}
                        </h3>

                        <p id="work-description">{exp.description}</p>
                    </Col>
                </Row>
        );
    }

    return (
        <section id="work">
            <h1>Work Experience</h1>
            {workExperiences.map((experience) => renderWorkExperience(experience))}
        </section>
    );
}