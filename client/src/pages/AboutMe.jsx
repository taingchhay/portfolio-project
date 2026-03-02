import React from 'react';
import ITgirl from '../assets/ITgirl.png';

const AboutMe = () => (
  <section className="about-hero">
    <div className="about-image-wrap">
      <img src={ITgirl} alt="IT Girl" className="about-profile-img" />
    </div>
    <div className="about-content">
      <h1 className="about-title">ABOUT ME</h1>
      <h2 className="about-subtitle">Showcasing Passion, Vision, and Creativity</h2>
      <p className="about-desc">
        Hello! I am a passionate developer eager to build impactful projects. I enjoy learning new technologies and collaborating with others.
      </p>
    </div>
  </section>
);

export default AboutMe;
