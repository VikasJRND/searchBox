import React, { Component } from "react";

class Filter extends Component {
  state = {
    newCountry: "",
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

  newcontry = e => {
    {
      this.setState({
        newCountry: e.target.value
      });
    }
    console.log("new country", this.state.newCountry);
  };
  addCountry = country => {
    const newCountry = {
      id: this.state.countries.length + 1,
      name: this.state.newCountry
    };
    const countries = [...this.state.countries, newCountry];
    console.log("I am adding new counrty", countries);
    this.setState({
      countries: countries
    });
  };
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

  allcountry = item => {
    const allCountry = this.state.countries.map(country => {
      return country;
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
    const allCountry = this.state.countries.map(country => {
      return (
        <div key={country.id}>
          <ul>
            <li>{country.name}</li>
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
        <div>
          <table id="myTable">
            <tbody>
              <tr className="header">
                <th>Name</th>
              </tr>
              <tr>
                <td>{allCountry}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Filter;
