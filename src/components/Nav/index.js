import React, { useState } from "react";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  const [sidenav, setSideNav] = useState(false);
  const showSideNav = () => {
    setSideNav(!sidenav);
  };

  // const [width, setWidth] = useState(window.innerWidth);
  // const updateWidthAndHeight = () => {
  //   setWidth(window.innerWidth);
  // };

  // React.useEffect(() => {
  //   window.addEventListener("resize", updateWidthAndHeight);
  // });

  // if (width < 1200) {
  //   if (sidenav) {
  //     setSideNav(false);
  //     console.log(sidenav);
  //   }
  // }

  return (
    <>
      <nav className={sidenav ? "nav-menu active" : "nav-menu"}>
        <button onClick={showSideNav} className={sidenav ? "header-toggler btn-left" : "header-toggler"}>
          {sidenav ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </button>
        <div className="header-container">
          <div className="header-image">
            <a className="image-link" href="/">
              <img alt="jake" src={require("../../assets/images/pfp.jpeg")}></img>
            </a>
            <div className="header-links">
              <a href="https://github.com/Jakeology" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/jacob-bartoletta-9b1566216/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://stackoverflow.com/users/16644863/jacob-b" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-stack-overflow"></i>
              </a>
            </div>
          </div>
          <ul className="header-menu">
            {categories.map((category) => (
              <li className={`${currentCategory.name === category.name && `navActive`}`} key={category.name}>
                <span
                  onClick={() => {
                    setCurrentCategory(category);
                    setSideNav(false);
                  }}
                >
                  {category.name}
                </span>
              </li>
            ))}
          </ul>
          <p className="header-copyright">
            &copy; 2022{" "}
            <b>
              <a href="/">Jakeology.io</a>
            </b>
          </p>
        </div>
      </nav>
    </>
  );
}

export default Nav;
