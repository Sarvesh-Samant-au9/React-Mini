import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Coin from "./Components/Coin";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => setData(response.data))
      .catch((err) => setData(err));
  }, []);
  const handleChange = (e) => {
    setSearch(e);
  };
  console.log(data);

  const filteredData = data.filter((coin) => {
    return coin.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
  console.log(filteredData);
  return (
    <>
      {data && (
        <div className="coin-app">
          <div className="coin-search">
            <h1 className="coin-text">Search Currency</h1>
            <form>
              <input
                type="text"
                placeholder="Search"
                className="coin-input"
                value={search}
                onChange={(e) => handleChange(e.target.value)}
              />
            </form>
          </div>
          {filteredData.map((coin) => {
            // console.log(coin.price_change_percentage_24h);
            return (
              <Coin
                key={coin.id}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                volume={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}
                marketCap={coin.total_volume}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;

// ath: 3073058
// ath_change_percentage: -14.0592
// ath_date: "2021-01-08T15:05:37.863Z"
// atl: 3993.42
// atl_change_percentage: 66034.05812
// atl_date: "2013-07-05T00:00:00.000Z"
// circulating_supply: 18599543
// current_price: 2663841
// fully_diluted_valuation: 55542932381100
// high_24h: 2644902
// id: "bitcoin"
// // image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
// last_updated: "2021-01-13T20:15:24.944Z"
// low_24h: 2386377
// market_cap: 49193959960399
// market_cap_change_24h: 2083307564263
// market_cap_change_percentage_24h: 4.42216
// market_cap_rank: 1
// max_supply: 21000000
// name: "Bitcoin"
// price_change_24h: 155395
// price_change_percentage_24h: 6.19487
// roi: null
// symbol: "btc"
// total_supply: 21000000
// total_volume: 4630601360082
