import React from "react";

const Categories = ({ categories, filterItems, activeCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className={category === activeCategory ? "active-btn btn" : "btn"}
            // className={`btn ${category === activeCategory ? "active" : ""}`}
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
