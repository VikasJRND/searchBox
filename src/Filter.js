import React, { Component } from "react";

class Filter extends Component {
  state = {
    singleCountry: "",
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

  // newcontry = e => {
  //   {
  //     this.setState({
  //       singleCountry: e.target.value
  //     });
  //   }

  //   addCountry = e => {
  //     const countries = this.state.countries.map(item => {
  //       return item;
  //     });

  //     (countries = countries), this.state.singleCountry;
  //     console.log("........", countries);
  //     this.setState({ countries });
  //   };
  // };

  handlechange = e => {
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
        <div>
          <input
            type="text"
            id="myInput"
            placeholder="Add country... "
            onChange={this.newcontry}
          />
          <button onClick={this.addCountry}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Filter;
