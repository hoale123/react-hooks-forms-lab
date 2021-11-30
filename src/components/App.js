import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleItemFormSubmit(newItem) {
    //add item use spread operator.
    setItems([...items, newItem])
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} 
      // use callback function to add new form submit to get access from child to parent.
      onItemFormSubmit={handleItemFormSubmit}/>
    </div>
  );
}

export default App;
