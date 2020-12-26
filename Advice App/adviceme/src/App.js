import "./App.css";
import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = { data: "" };
  }
  componentDidMount = async () => {
    // const getData = await fetch("https://api.adviceslip.com/advice");
    // const response = await getData.json();
    // const solution = await response;
    // console.log(solution);
    // this.setState({ data: solution.slip.advice });
    this.getFetched();
  };
  getFetched = async () => {
    const getData = await fetch("https://api.adviceslip.com/advice");
    const response = await getData.json();
    const solution = await response;
    console.log(solution);
    this.setState({ data: solution.slip.advice });
  };
  render() {
    console.log(this.state);
    return (
      <div className="container">
        {/* {this.state.data !== "" && ( */}

        <div className="container-fluid display">
          <div className="card" style={{ width: "70%" }}>
            <div className="card-body">
              {/* <h1>Advice</h1> */}
              <h3>{this.state.data}</h3>
              <button
                onClick={this.getFetched}
                type="button"
                className="btn btn-outline-info btn-lg"
                style={{ margin: "auto", display: "block" }}
              >
                Another Quote
              </button>
            </div>
          </div>
        </div>
        {/* // )} */}
      </div>
    );
  }
}

export default App;
