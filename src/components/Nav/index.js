import React from "react";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <header>
      <nav className="header-container">
        <div className="header-image">
          <a className="image-link" href="/">
            <img alt="jake" src="/images/pfp.jpeg"></img>
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
      </nav>
    </header>
  );
}

export default Nav;
