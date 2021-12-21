import React from "react";

function Search({search, setSearch}) {
  function onSearchChange(e) {
    setSearch(e.target.value)
  }
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Search;
