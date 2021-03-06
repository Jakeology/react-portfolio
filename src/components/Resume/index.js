import React from "react";

function Resume() {
  const mySkillsTitle = "my skills";
  const resumeTitle = "resume";

  const htmlPercent = "95";
  const cssPercent = "90";
  const jsPercent = "80";
  const nodeJsPercent = "75";
  const expressJsPercent = "75";
  const reactJsPercent = "80";

  return (
    <div>
      <div className="primary-section-title">
        <h2>{mySkillsTitle}</h2>
        <span>{mySkillsTitle}</span>
      </div>
      <div className="row">
        <div className="col-lg-6 mt-30">
          <h6 className="progress-title">HTML5</h6>
          <div className="progress-inner">
            <div className="progress-percentage">{htmlPercent}%</div>
            <div className="progress-container">
              <span className="progress-active" style={{ width: htmlPercent + "%" }}></span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-30">
          <h6 className="progress-title">CSS</h6>
          <div className="progress-inner">
            <div className="progress-percentage">{cssPercent}%</div>
            <div className="progress-container">
              <span className="progress-active" style={{ width: cssPercent + "%" }}></span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-30">
          <h6 className="progress-title">JavaScript</h6>
          <div className="progress-inner">
            <div className="progress-percentage">{jsPercent}%</div>
            <div className="progress-container">
              <span className="progress-active" style={{ width: jsPercent + "%" }}></span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-30">
          <h6 className="progress-title">NodeJS</h6>
          <div className="progress-inner">
            <div className="progress-percentage">{nodeJsPercent}%</div>
            <div className="progress-container">
              <span className="progress-active" style={{ width: nodeJsPercent + "%" }}></span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-30">
          <h6 className="progress-title">ExpressJS</h6>
          <div className="progress-inner">
            <div className="progress-percentage">{expressJsPercent}%</div>
            <div className="progress-container">
              <span className="progress-active" style={{ width: expressJsPercent + "%" }}></span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-30">
          <h6 className="progress-title">ReactJS</h6>
          <div className="progress-inner">
            <div className="progress-percentage">{reactJsPercent}%</div>
            <div className="progress-container">
              <span className="progress-active" style={{ width: reactJsPercent + "%" }}></span>
            </div>
          </div>
        </div>
      </div>
      <div className="primary-section-title">
        <h2>{resumeTitle}</h2>
        <span>
          {resumeTitle}{" "}
          <a href={require("../../assets/images/resume.pdf")} download>
            <i className="fa-duotone fa-file-arrow-down"></i>
            <h6>Download</h6>
          </a>
        </span>
      </div>
      <div className="experience pt-5 pb-5">
        <h2>
          <i className="fa-thin fa-briefcase"></i> Work Experience
        </h2>
      </div>
      <div className="timeline pt-5">
        <div className="timeline-container left">
          <div className="content">
            <h2>2020-Current</h2>
            <p>Server @ First Watch</p>
          </div>
        </div>
        <div className="timeline-container right">
          <div className="content">
            <h2>2015-2020</h2>
            <p>Landscape Foreman @ Suncrest Gardens</p>
          </div>
        </div>
        <div className="timeline-container left">
          <div className="content">
            <h2>1996-2015</h2>
            <p>Was a kid and couldn't work</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
