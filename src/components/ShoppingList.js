import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // when form is use in useState; it is empty first
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

    // itemsToDisplay is what we want to display when the search is used so we can filter it on itemsToDisplay
  const itemsToDisplay = items.filter((item) => {
    //category
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;

    // to filter Search item...
  }).filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
      search = {search}
      onSearchChange ={setSearch}
      onCategoryChange={handleCategoryChange} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
