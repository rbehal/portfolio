import React, { Component } from 'react'
import '../App.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Card from 'react-bootstrap/Card'

import primeAIDGif from '../assets/Projects/primeAID.gif'
import jobSearchGif from '../assets/Projects/jobSearch.gif'
import amazingBrickGif from '../assets/Projects/amazingBrick.gif'
import optionsGif from '../assets/Projects/optionsStrategies.gif'



export default class projects extends Component {
  render() {
    return (
      <div className="projects" id="projects">
        <h1>Projects</h1>
        <Container fluid>
          <Row>
            <div className="card-deck">
              <Card bg="light" className="card">
                <Card.Img className="preview" variant="top" src="https://media.giphy.com/media/QXPWff3shCkTgh6DKM/giphy.gif" />
                <Card.Body>
                  <Card.Title><h2>Tetris.AI</h2></Card.Title>
                  <Card.Text>
                    A genetic algorithm to play and master a Tetris clone. tetris.ai uses a single layer perceptron model to judge the quality of a given move.
                    The genetic algorithm begins by randomly initializing a generation of 50 weights. The genomes play games 1 by 1 consecutively, learning from their
                    mistakes and evolving through every generation.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a href="https://github.com/rbehal/tetris.ai" id="view-link" target="_blank" rel="noopener noreferrer">View Project</a>
                </Card.Footer>
              </Card>

              <Card bg="light" className="card">
                <Card.Img className="preview" variant="top" src={primeAIDGif} />
                <Card.Body>
                  <Card.Title><h2>primeAID</h2></Card.Title>
                  <Card.Text>
                    primeAID is medical software that intends to streamline communication and information among medical facilities. It also aims to elevate the convenience
                    of the patient and administrative experience. Patients will be able to access critical information through our web application. This information includes
                    viewing current patient wait times, nearby medical facilities, and preliminary triage services.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a href="https://devpost.com/software/primeaid" id="view-link" target="_blank" rel="noopener noreferrer">View Project</a>
                </Card.Footer>
              </Card>

              <Card bg="light" className="card">
                <Card.Img className="preview" variant="top" src={jobSearchGif} />
                <Card.Body>
                  <Card.Title><h2>jobSearch</h2></Card.Title>
                  <Card.Text>
                    I became extremely tired of the job search process. Particularly, I hated that I had to go to a bunch of different websites, set my search settings repeatedly,
                    and see the same jobs over and over again. The worst was going through 10 clicks (filled with ads) just to find a link to apply to the job. As a result, I made
                    a program that solves all of these issues.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a href="https://github.com/rbehal/jobSearch" id="view-link" target="_blank" rel="noopener noreferrer">View Project</a>
                </Card.Footer>
              </Card>
            </div>
          </Row>

          <Row style={{ marginTop: "10%" }}>
            <div className="card-deck">
              <Card bg="light" className="card">
                <Card.Img className="preview" variant="top" src={optionsGif} />
                <Card.Body>
                  <Card.Title><h2>Options Trading Strategy Modelling</h2></Card.Title>
                  <Card.Text>
                    A Jupyter Notebook used to test various options trading strategies. Some of the strategies available to model include: Bull Call Spreads, Long Straddles, Iron Condors, and Covered Calls.
                    Originally intended for use in the TMX Options Trading Competition.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a href="https://github.com/rbehal/options-trading-strategies/" id="view-link" target="_blank" rel="noopener noreferrer">View Project</a>
                </Card.Footer>
              </Card>

              <Card bg="light" className="card">
                <Card.Img className="preview" variant="top" src="https://s7.gifyu.com/images/tickerPicker.gif" />
                <Card.Body>
                  <Card.Title><h2>Ticker Picker</h2></Card.Title>
                  <Card.Text>
                    This application retrieves the 500 stocks tracked by the S&P500 index and runs them through a variety of indicators in order to perform a technical overview. The final
                    result is the ability to view the highest rated stocks to buy or sell and subsequently view their individual indicator ratings, in order to make a decision.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a href="https://github.com/rbehal/ticker_picker" id="view-link" target="_blank" rel="noopener noreferrer">View Project</a>
                </Card.Footer>
              </Card>

              <Card bg="light" className="card">
                <Card.Img className="preview" variant="top" src={amazingBrickGif} />
                <Card.Body>
                  <Card.Title><h2>Amazing Brick Neuroevolution</h2></Card.Title>
                  <Card.Text>
                    A recreation of the (originally) iOS game Amazing Brick in Javascript using the p5 framework. TensorFlow.js was used to develop a neuroevolutionary algorithm
                    whose goal is to master the game. The neural networks use several parameters for its fitness function. These include time alive, time spent in the middle, and score.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a href="https://github.com/rbehal/amazingbrick-neuroevolution" id="view-link" target="_blank" rel="noopener noreferrer">View Project</a>
                </Card.Footer>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}
