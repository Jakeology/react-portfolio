import React, { useState } from "react";
import Nav from "./components/Nav";

// Navigation Menu Components
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    { name: "Home", child: Home },
    { name: "About", child: About },
    { name: "Portfolio", child: Portfolio },
    { name: "Resume", child: Resume },
    { name: "Contact" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const ActiveChild = currentCategory.child;

  return (
    <div>
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
      <main>
        <ActiveChild />
      </main>
    </div>
  );
}

export default App;
