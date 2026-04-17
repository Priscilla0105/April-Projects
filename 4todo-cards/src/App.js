import React, { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import useDebounce from "./hooks/useDebounce";

function App() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // FETCH DATA
  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // DEBOUNCE
  const debouncedSearch = useDebounce(search, 500);

  // FILTER
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="main-card">

      <h2>Product Search</h2>

      <div className="input-box">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setSearch("")}>Clear</button>
      </div>

      <div className="products-container">
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))
        ) : (
          <p>No Results Found</p>
        )}
      </div>

    </div>
  );
}

export default App;