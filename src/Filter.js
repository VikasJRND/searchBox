import React, { Component } from "react";

class Filter extends Component {
  state = {
    countries: [
      { id: 1, name: "Algeria" },
      { id: 2, name: "Australia" },
      { id: 3, name: "Belgium" },
      { id: 4, name: "Canada" }
    ],
    countryList: "",
    List: "",
    filtedCounties: [
      { id: 1, name: "Algeria" },
      { id: 2, name: "Australia" },
      { id: 3, name: "Belgium" },
      { id: 4, name: "Canada" }
    ]
  };

  handlechange = e => {
    console.log(".............", this.state.countryList);
    const newList = this.state.countries.filter(item => {
      if (item.name.indexOf(e.target.value) > -1) {
        return item;
      }
    });

    this.setState({
      filtedCounties: newList
    });
  };

  render() {
    const countryList = this.state.filtedCounties.map(item => {
      return (
        <div key={item.id}>
          <ul>
            <li>{item.name}</li>
          </ul>
        </div>
      );
    });

    return (
      <div>
        <input
          type="text"
          id="myInput"
          onChange={this.handlechange}
          placeholder="Search for names.."
        />

        <table id="myTable">
          <tbody>
            <tr className="header">
              <th>Name</th>
            </tr>
            <tr>
              <td>{countryList}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Filter;
