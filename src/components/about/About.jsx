import React from "react";
import "./about.css";
import AboutImg from "../../assets/tunde_11.png";
import CV from "../../assets/Tunde-CV.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section_subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Software developer, I create software application using node
            js,laravel,MySql, express,mongodb and react, I have years of
            experience and I have build different project with the skill i have
            aquired.
          </p>

          <a download="" href={CV} className="button button_flex">
            Download CV
            <i class="uil uil-file-info-alt button_icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
