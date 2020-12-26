import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Character from "./Components/Characters/Character";
import Search from "./Components/Search";

function App() {
  const [getInfo, setGetInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const results = await fetch(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      const converJson = await results.json();
      // console.log(converJson);
      setGetInfo(converJson);
      setIsLoading(false);
    };
    fetchData();
  }, [query]);
  console.log(query);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Character getInfo={getInfo} isLoading={isLoading} />
    </div>
  );
}

export default App;
