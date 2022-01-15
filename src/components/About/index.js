import React from "react";

function About() {

  const title = "About";

  return (
    <div className="container-fluid">
      <div className="m-1 row d-flex justify-content-center mb-5">
        <div className="col-12 col-xxl-8">
          <div className="primary-section-title">
            <h2>{title}</h2>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;