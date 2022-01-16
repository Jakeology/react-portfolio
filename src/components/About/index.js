import React from "react";

function About() {
  const title = "about me";

  return (
    <div className="container-xxl">
      <div className="m-1 row">
        <div className="col-12 col-xl-12">
          <div className="primary-section-title">
            <h2>{title}</h2>
            <span>{title}</span>
          </div>
          <div className="about-me-primary">
            <article className="about-me">
              <img src="/images/placeholder.png" alt="Male Placeholder" />
              <div className="about-me-bio">
                <h3>Jacob Bartoletta</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Tristique senectus et netus et malesuada fames. Arcu cursus euismod quis viverra nibh
                  cras. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Vel facilisis volutpat est velit egestas
                  dui id. Eget magna fermentum iaculis eu non. Diam in arcu cursus euismod quis viverra nibh. Congue nisi
                  vitae suscipit tellus mauris a diam maecenas
                </p>
                <br />
                <p>
                  Pulvinar pellentesque habitant morbi tristique senectus et. Dui faucibus in ornare quam viverra. Fringilla
                  phasellus faucibus scelerisque eleifend donec pretium. Massa massa ultricies mi quis hendrerit dolor magna.
                  Ultricies mi eget mauris pharetra et ultrices neque. Accumsan tortor posuere ac ut consequat semper viverra
                  nam. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Blandit massa enim nec dui nunc
                  mattis enim. Orci a scelerisque purus semper. At consectetur lorem donec massa sapien faucibus et molestie
                  ac. Amet dictum sit amet justo donec enim diam vulputate ut.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
