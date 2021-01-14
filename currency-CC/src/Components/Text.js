import React from "react";
function Text(props) {
  // console.log(props);
  return (
    <>
      <h2>
        <p>
          The value of <span>{props.basicCurr}</span> is {props.result} in
          <span> {props.outputCur} </span>
        </p>
      </h2>
    </>
  );
}

export default Text;
