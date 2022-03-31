import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/items`)
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
