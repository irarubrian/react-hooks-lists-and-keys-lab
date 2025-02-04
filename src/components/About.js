import React from "react";
import Links from "./Links";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>I am a web developer passionate about React.</p>
      <Links github="https://github.com/yourgithub" linkedin="https://linkedin.com/in/yourprofile" />
    </section>
  );
}

export default About;
