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
    List: ""
  };

  // handlechange = e => {
  //   console.log("..........", this.state.compare);

  //   const newList = this.state.todos.filter(item => {
  //     return item.id !== id;
  //   });

  //   this.setState({
  //     compare: e.target.value
  //   });
  // };

  render() {
    const countryList = this.state.countries.map(item => {
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
