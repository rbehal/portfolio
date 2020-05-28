import React from 'react';
import './App.css';
import Home from './components/home'
import Sidebar from './components/sidebar'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>         
          <Col className="col-10 px-0 align-items-start">
            <Home /> 
          </Col> 
          <Col className="col-2 offset-10 px-0 position-fixed">
            <Sidebar />
          </Col>
        </Row>
      </Container> 
    </React.Fragment>
  );
}

export default App;
