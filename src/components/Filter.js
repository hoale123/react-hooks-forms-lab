import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  function handleSearchChange(event) {
    onSearchChange(event.target.value)
  }
  return (
    <div className="Filter">
      <input 
      type="text" 
      name="search" 
      placeholder="Search..."
      // value for search because were using a form. so whatever is search is the value to filter.
      value = {search}
      onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
