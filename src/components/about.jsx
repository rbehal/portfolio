import React from "react";
import "../App.css";

export default function About() {
  return (
    <section className="about" id="about">
      <h1 id="about-header">About Me</h1>
      <p>
        Currently building AgentHub, a no-code platform for building AI-powered
        pipelines to automate business workflows. Start building at:{" "}
        <a
          href="https://agenthub.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://agenthub.dev/
        </a>
        <br></br>
        <br></br>I am a professional Software Engineer with a couple of years of
        industry experience in engineering including some time spent in big
        tech. I love solving incredibly hard challenges at scale while learning
        cutting edge technologies and tools. I am also interested in global
        capital markets, banking, and finance.
        <br></br>
        <br></br>I aspire to develop and build on my foundation through any
        possible learning opportunities related to these passions.
      </p>
    </section>
  );
}
