import "./styles.css";
import { useState } from "react";
import JSONDATA from "cities.json";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(event) => {
          const textChanged = event.target.value;
          if (textChanged.length >= 3) {
            setSearchTerm(textChanged);
          }
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.name}</p>
          </div>
        );
      })}
    </div>
  );
}
