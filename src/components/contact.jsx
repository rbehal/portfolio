import React, { Component } from 'react'
import '../App.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



export default class contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;

    return (
        <section id="contact">
            <h1>I'd love to chat!</h1>
            <Container>
                <form onSubmit={this.submitForm} action="https://formspree.io/xvowapeg" method="POST">
                    <Row><input id="email-box" className="form-control input-sm" type="email" name="email" placeholder="Your Email" /></Row>
                    <Row><textarea id="message-box" className="form-control" type="text" name="message" placeholder="Your Message" /></Row>
                    <Row>
                        {status === "SUCCESS" ? <p className="submit-text">Thanks, I will get back to you as soon as possible!</p> : <button className="submit-button">Submit</button>}
                        {status === "ERROR" && <p className="submit-text">Unfortunately, there was an error. Please try again.</p>}
                    </Row>
                </form>
            </Container>
        </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}