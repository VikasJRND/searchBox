import React, { Component } from "react";
import Option from "./Options";
import { Radio } from "antd";

const RadioGroup = Radio.Group;
class Question extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  render() {
    console.log(this.state.value);
    return (
      <div>
        {this.props.question}
        <br />
        <RadioGroup onChange={this.onChange}>
          <Radio value={"A"}>{this.props.options.A}</Radio>
          <Radio value={"B"}>{this.props.options.B}</Radio>
          <Radio value={"C"}>{this.props.options.C}</Radio>
          <Radio value={"D"}>{this.props.options.D}</Radio>
        </RadioGroup>
        <div>
          {this.state.value === this.props.keys
            ? "Correct Answere"
            : this.state.value != ""
            ? "Incorrect Answere "
            : null}
        </div>
      </div>
    );
  }
}

export default Question;
