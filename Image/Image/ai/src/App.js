import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
function App() {
  const [image, setImage] = useState("");
  // useEffect();
  const handleChange = () => {
    axios
      .get(
        "https://api.generated.photos/api/v1/faces?api_key=umAAVXQiOq5E2TzlDKvhDw&order_by=random"
      )
      .then((response) => {
        const outputImage = response.data.faces[0].urls[4][512];
        outputImage && setImage(response.data.faces[0].urls[4][512]);
      })
      .catch((erroe) => {
        console.log(erroe);
      });
  };
  return (
    <div className="App">
      <h1>AI PHOTO</h1>
      {image && <img src={image} alt="face_Image" />}
      <button onClick={handleChange}>New Image</button>
    </div>
  );
}

export default App;
