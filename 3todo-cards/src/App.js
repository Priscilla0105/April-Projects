import React, { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import { getProducts } from "./services/productService";

function App() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // 🔥 FETCH THROUGH SERVICE
  useEffect(() => {
    const loadData = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    loadData();
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-card">

      <h2>Fetch Through React</h2>

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