import React from "react";

function Portfolio() {
  const title = "portfolio";

  return (
    <div>
      <div className="primary-section-title">
        <h2>{title}</h2>
        <span>{title}</span>
      </div>

      <div className="portfolio-primary">
        <div className="cards">
          <div className="portfolio-card">
            <img className="card-image" src={require("../../assets/images/run-buddy.png")} alt="Run Buddy" />
            <div className="card-bio">
              <h3>Run Buddy</h3>
              <p>HTML • CSS</p>
              <span>
                <a href="https://jakeology.github.io/run-buddy/" target="_blank" rel="noreferrer">
                  <i className="fa-light fa-link"></i>
                </a>
                <a href="https://github.com/Jakeology/run-buddy" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
            </div>
          </div>

          <div className="portfolio-card">
            <img className="card-image" src={require("../../assets/images/scheduler.png")} alt="Work Scheduler" />
            <div className="card-bio">
              <h3>Work Scheduler</h3>
              <p>HTML • CSS • JavaScript</p>
              <span>
                <a href="https://jakeology.github.io/work-scheduler/" target="_blank" rel="noreferrer">
                  <i className="fa-light fa-link"></i>
                </a>
                <a href="https://github.com/Jakeology/work-scheduler" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
            </div>
          </div>

          <article className="portfolio-card">
            <img className="card-image" src={require("../../assets/images/safetravel.png")} alt="Safe Travel" />
            <div className="card-bio">
              <h3>Safe Travel</h3>
              <p>JavaScript • REST API</p>
              <span>
                <a href="https://jakeology.github.io/safe-travels/" target="_blank" rel="noreferrer">
                  <i className="fa-light fa-link"></i>
                </a>
                <a href="https://github.com/Jakeology/safe-travels" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
            </div>
          </article>

          <article className="portfolio-card">
            <img className="card-image" src={require("../../assets/images/tech-blog.png")} alt="Tech Blog" />
            <div className="card-bio">
              <h3>Tech Blog</h3>
              <p>NodeJS • Sequelize • HandlebarsJS</p>
              <span>
                <a href="https://lit-coast-25715.herokuapp.com/" target="_blank" rel="noreferrer">
                  <i className="fa-light fa-link"></i>
                </a>
                <a href="https://github.com/Jakeology/tech-blog" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
            </div>
          </article>

          <article className="portfolio-card">
            <img className="card-image" src={require("../../assets/images/paws-n-play.png")} alt="Paws n Play" />
            <div className="card-bio">
              <h3>Tech Blog</h3>
              <p>ExpressJS • Sequelize • HandlebarsJS</p>
              <span>
                <a href="https://calm-scrubland-16767.herokuapp.com/" target="_blank" rel="noreferrer">
                  <i className="fa-light fa-link"></i>
                </a>
                <a href="https://github.com/Jakeology/paws-n-play" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
            </div>
          </article>

          <article className="portfolio-card">
            <img className="card-image" src={require("../../assets/images/budget-tracker.png")} alt="Budget Tracker" />
            <div className="card-bio">
              <h3>Budget Tracker</h3>
              <p>ExpressJS • Mongoose • MongoDB</p>
              <span>
                <a href="https://thawing-mesa-44715.herokuapp.com/" target="_blank" rel="noreferrer">
                  <i className="fa-light fa-link"></i>
                </a>
                <a href="https://github.com/Jakeology/budget-tracker" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
