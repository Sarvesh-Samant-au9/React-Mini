import React from "react";
import SingleItem from "./SingleItem";

const Character = ({ getInfo, isLoading }) => {
  return isLoading ? (
    <h1 style={{ textAlign: "center" }}>Loading....</h1>
  ) : (
    <section className="cards">
      {getInfo.map(function (info) {
        return <SingleItem key={info.char_id} item={info} />;
      })}
    </section>
  );
};

export default Character;
