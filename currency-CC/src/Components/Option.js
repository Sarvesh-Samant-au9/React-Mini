import React from "react";

function Option(props) {
  // console.log(props);
  return (
    <>
      <select value={props.baseCurrency} onChange={props.changeBaseCurrency}>
        {props.currency.map(function (data, index) {
          return (
            <option key={index} value={`${data}`}>
              {data}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Option;
