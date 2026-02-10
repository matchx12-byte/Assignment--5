import React from "react";
import useFetch from "./useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );

  if (loading) return <h2 className="status">Loading...</h2>;
  if (error) return <h2 className="status">Error fetching data</h2>;

  return (
    <div className="app">
      <h1 className="title">Photos</h1>

      <div className="grid">
        {data.slice(0, 24).map((item) => (
          <div className="card" key={item.id}>
            <div className="img-wrapper">
              <img src={item.thumbnailUrl} alt={item.title} />
            </div>
            <p className="caption">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
