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
            <img className="card-image" src="/images/calculator.png" alt="Calculator" />
            <div className="card-bio">
              <h3>Calculator</h3>
              <p>React/CSS/JavaScript</p>
              <span>
                <a href="/">
                  <i className="fa-light fa-link"></i>
                </a>
                <a href="/">
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
            </div>
          </div>

          <div className="portfolio-card">
            <img className="card-image" src="/images/led-wall.jpg" alt="Led Wall" />
            <div className="card-bio">
              <h3>Led Wall</h3>
              <p>Node.js/loT</p>
              <span>
                <a href="/">
                  <i className="fa-light fa-link"></i>
                </a>
                <a href="/">
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
            </div>
          </div>

          <article className="portfolio-card">
            <img className="card-image" src="/images/moutain.png" alt="Moutain" />
            <div className="card-bio">
              <h3>Moutain</h3>
              <p>Surf Report</p>
              <span>
                <a href="/">
                  <i className="fa-light fa-link"></i>
                </a>
                <a href="/">
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
            </div>
          </article>

          <article className="portfolio-card">
            <img className="card-image" src="/images/puzzle.jpg" alt="Pretzel Puzzle" />
            <div className="card-bio">
              <h3>Pretzel Puzzle</h3>
              <p>MERN Stack</p>
              <span>
                <a href="/">
                  <i className="fa-light fa-link"></i>
                </a>
                <a href="/">
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
