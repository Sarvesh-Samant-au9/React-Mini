import "./App.css";
import React, { useState } from "react";
import marked from "marked";
import ReactMarkdown from "react-markdown";
function App() {
  const [markdown, setMarkdown] = useState("# markDown");

  const changeText = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <div className="displayFlex">
      <div className="mainClass textBox">
        <textarea value={markdown} onChange={changeText}></textarea>
      </div>

      {/* <div
        className="mainClass"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      /> */}
      <ReactMarkdown source={markdown} className="mainClass" />
    </div>
  );
}

export default App;
