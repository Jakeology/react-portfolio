import React, { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [categories] = useState([
    { name: "Home"},
    { name: "About"},
    { name: "Portfolio"},
    { name: "Resume" },
    { name: "Contact" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
    </div>
  );
}

export default App;
