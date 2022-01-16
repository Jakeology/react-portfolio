import React, { useState } from "react";
import Nav from "./components/Nav";

// Navigation Menu Components
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  const [categories] = useState([
    { name: "Home", child: Home },
    { name: "About", child: About },
    { name: "Portfolio", child: Portfolio },
    { name: "Resume", child: Resume },
    { name: "Contact", child: Contact },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const ActiveChild = currentCategory.child;

  return (
    <div>
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
      <main>
        <div className="container-xxl">
          <div className="m-1 row">
            <div className="col-12 col-xl-12">
              <ActiveChild />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
