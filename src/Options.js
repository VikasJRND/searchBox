import React, { Component } from "react";
import { Radio } from "antd";

const RadioGroup = Radio.Group;

class Options extends Component {
  state = {
    value: ""
  };
  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>7</Radio>
          <Radio value={2}>12</Radio>
          <Radio value={3}>6</Radio>
          <Radio value={4}>4</Radio>
        </RadioGroup>
        <div>
          {this.state.value === 2
            ? "Correct Answere"
            : this.state.value != ""
            ? "Incorrect Answere "
            : null}
        </div>
      </div>
    );
  }
}

export default Options;
