import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // FETCH
  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
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
            <div key={p.id} className="product-card">
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
            </div>
          ))
        ) : (
          <p>No Results Found</p>
        )}
      </div>

    </div>
  );
}

export default App;