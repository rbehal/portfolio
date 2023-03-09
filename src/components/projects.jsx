import React from 'react'
import '../App.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import { projects } from '../constants/projects'

function ProjectCard({ title, description, image, link }) {
  return (
    <Card bg="light" className="card">
      <Card.Img className="preview" variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          <h2>{title}</h2>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <a href={link} id="view-link" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </Card.Footer>
    </Card>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <Container fluid>
        <Row>
          <div className="card-deck">
            {projects.slice(0,3).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Row>
        <Row style={{ marginTop: "10%" }}>
          <div className="card-deck">
            {projects.slice(-3).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Row>        
      </Container>
    </section>
  );
}