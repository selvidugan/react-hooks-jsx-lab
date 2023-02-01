import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about" >
    <h2>About Me</h2>
    <p>hey this is about me page</p>
    <img src={image} q alt="I made this" />
  </div>;
}

export default About;
