import React from "react";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <header>
      <nav className="header-container">
        <div className="header-image">
          <a href="/">
            <img alt="jake" src="/images/pfp.jpeg"></img>
          </a>
          <h2>Jacob Bartoletta</h2>
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
      </nav>
    </header>
  );
}

export default Nav;
