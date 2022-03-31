import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/items")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ul className="App">
      {items.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
}

export default App;
