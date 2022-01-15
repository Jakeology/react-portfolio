import React, { useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  const [categories] = useState([
    { name: "Home", child: Home },
    { name: "About" },
    { name: "Portfolio" },
    { name: "Resume" },
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
