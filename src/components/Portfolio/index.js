import React from "react";

function Portfolio() {
  return (
    <div className="portfolio-primary">
      <div className="cards">
        <div className="portfolio-card">
          <div className="card-bio">
            <img src="/images/calculator.png" alt="Calculator" />
            <h3>Calculator</h3>
            <p>React/CSS/JavaScript</p>
          </div>
        </div>

        <article className="portfolio-card">
          <div className="card-bio">
            <img src="/images/led-wall.jpg" alt="Led Wall" />
            <h3>Led Wall</h3>
            <p>Node.js/loT</p>
          </div>
        </article>

        <article className="portfolio-card">
          <div className="card-bio">
            <img src="/images/moutain.png" alt="Moutain" />
            <h3>Moutain</h3>
            <p>Surf Report</p>
          </div>
        </article>

        <article className="portfolio-card">
          <div className="card-bio">
            <img src="/images/puzzle.jpg" alt="Pretzel Puzzle" />
            <h3>Pretzel Puzzle</h3>
            <p>MERN Stack</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Portfolio;
