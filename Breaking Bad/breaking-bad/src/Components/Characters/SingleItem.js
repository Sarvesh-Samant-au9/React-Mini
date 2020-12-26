import React from "react";

const SingleItem = ({ item }) => {
  // console.log(item);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong>
              {item.portrayed}
            </li>
            <li>
              <strong>Nick Name:</strong>
              {item.nickname}
            </li>
            <li>
              <strong>BirthDate:</strong>
              {item.birthday}
            </li>
            <li>
              <strong>Status:</strong>
              {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
