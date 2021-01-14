import React, { Component } from "react";
import Text from "./Text";
export default class CurrencyInfo extends Component {
  constructor() {
    super();
    this.state = {
      baseCurrency: "INR",
      OutputCurrency: "USD",
      allCurrency: [],
      rates: [],
      baseAmount: 1,
    };
  }

  componentDidMount() {
    this.getCallfromApi(this.state.baseCurrency);
  }

  getCallfromApi = async (event) => {
    const apiURL = `https://api.exchangeratesapi.io/latest?base=${event}`;
    const getAPI = await fetch(apiURL);
    const APIDATA = await getAPI.json();
    this.setState({
      rates: APIDATA["rates"],
      allCurrency: Object.keys(APIDATA["rates"]),
    });
  };

  changeBaseCurrency = (event) => {
    this.setState({ baseCurrency: event.target.value });
    this.getCallfromApi(event.target.value);
  };

  changeBaseAmount = (e) => {
    this.setState({ baseAmount: e.target.value });
  };

  changeOutputCurrency = (event) => {
    this.setState({ OutputCurrency: event.target.value });
  };

  getOutputResult = (base, convert, rates) => {
    // console.log(base, "THis is Base");
    // console.log(convert, "THis is Convert");
    // console.log(rates[convert], "THis is Reates");
    return Number.parseFloat(base * rates[convert]).toFixed(3);
  };

  render() {
    const result = this.getOutputResult(
      this.state.baseAmount,
      this.state.OutputCurrency,
      this.state.rates
    );
    const createOptionTags = this.state.allCurrency.map(function (
      dataCurrency,
      index
    ) {
      return (
        <option value={dataCurrency} key={index}>
          {dataCurrency}
        </option>
      );
    });
    // console.log(this.state);
    return (
      <div className="wholeApp">
        <select
          value={this.state.baseCurrency}
          onChange={this.changeBaseCurrency}
        >
          {createOptionTags}
        </select>
        {/* <h1>{this.state.baseCurrency}</h1> */}

        <select
          value={this.state.OutputCurrency}
          onChange={this.changeOutputCurrency}
        >
          {createOptionTags}
        </select>
        <h2
          style={{
            marginBottom: "10px",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          Enter The Amount Below
        </h2>
        <input
          type="number"
          defaultValue={this.state.baseAmount}
          onChange={this.changeBaseAmount}
          min={0}
        />
        <Text
          basicCurr={this.state.baseCurrency}
          base={this.state.baseAmount}
          result={result}
          outputCur={this.state.OutputCurrency}
        />
      </div>
    );
  }
}
