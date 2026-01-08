import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate about creating digital experiences</p>
          
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer based in India with a keen eye for creating 
              elegant solutions to complex problems. My journey in web development started with 
              a curiosity about how things work on the internet, and it has evolved into a 
              fulfilling career building scalable, user-centric applications.
            </p>
            
            <p>
              With expertise spanning both frontend and backend technologies, I thrive on the 
              challenge of bringing ideas to life through clean, efficient code. From crafting 
              intuitive user interfaces with React to architecting robust backend systems with 
              Java and Python, I approach every project with attention to detail and a commitment 
              to excellence.
            </p>
            
            <p>
              My versatility as a full-stack developer allows me to see the bigger picture while 
              maintaining focus on the finer details. Whether it's optimizing database queries, 
              implementing responsive designs, or integrating complex APIs, I bring a holistic 
              approach to web development that ensures seamless user experiences.
            </p>
            
            <p>
              I'm constantly learning and staying updated with the latest technologies and best 
              practices in the ever-evolving world of web development. When I'm not coding, you'll 
              find me exploring new frameworks, contributing to open-source projects, or sharing 
              knowledge with the developer community.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>

          <div className="about-location">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Based in India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
