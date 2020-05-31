import React, { Component } from 'react'
import '../App.css';



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
        <div className="contact">
            <h1>I'd love to chat!</h1>

            <form onSubmit={this.submitForm} action="https://formspree.io/xvowapeg" method="POST">
                <input className="form-control input-sm" type="email" name="email" placeholder="Your email" />
                <input id="comment" className="form-control" rows="5" type="text" name="message" placeholder="Message" />
                {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
        </div>
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