import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/App.css";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((response) => setCategories(response.data));
  }, []);

  return (
    <div className="category">
      {categories.map((cat) => (
        <Link key={cat} to={`/category/${encodeURIComponent(cat)}`} className="category-link">
          {cat}
        </Link>
      ))}
    </div>
  );
}

export default Category;