
import React from "react";
import useFetch from "./useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching data</h2>;

  return (
    <div className="container">
      {data.slice(0, 8).map((item) => (
        <div className="card" key={item.id}>
          <img src={item.images[0]} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
