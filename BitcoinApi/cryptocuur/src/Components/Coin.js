import React from "react";
import "./Coin.css";
const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  if (priceChange === null) {
    priceChange = 0;
  }
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{price}</p>
          <p className="coin-volume">{volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(3)}</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(3)}</p>
          )}
          <p className="coin-marketcap">
            MKT CAP : ${marketCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
