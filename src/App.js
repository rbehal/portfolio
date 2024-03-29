import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home'
import Sidebar from './components/sidebar'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Work from './components/work'
import Contact from './components/contact'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-173611398-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col className="col-md-12 col-lg-10 px-0 align-items-start">
            <Home screenWidth={screenWidth} />
          </Col>
          <Col className="col-2 offset-10 px-0 position-fixed">
            <Sidebar />
          </Col>
        </Row>
        <div className="general">
          <Row>
            <Col className="col-md-12 col-lg-10 main">
              <About />
              <Skills screenWidth={screenWidth} />
              <Projects />
              <Work screenWidth={screenWidth} />
              <Contact />
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
