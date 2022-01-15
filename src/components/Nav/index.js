import React from "react";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <header>
      <h1>Jakeology.io</h1>
      <nav className="header-container">
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
