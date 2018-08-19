import React, { Component } from "react";

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {};
    this.cities = this.cities.bind(this);
    this.homeTypes = this.homeTypes.bind(this);
    this.bedrooms = this.bedrooms.bind(this);
  }

  componentWillMount() {
    this.props.populateAction();
  }

  cities() {
    if (this.props.globalState.populateFormsData.cities != undefined) {
      var { cities } = this.props.globalState.populateFormsData;

      console.log(cities);
      return cities.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }

  homeTypes() {
    if (this.props.globalState.populateFormsData.homeTypes != undefined) {
      var { homeTypes } = this.props.globalState.populateFormsData;

      console.log(homeTypes);
      return homeTypes.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }

  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms != undefined) {
      var { bedrooms } = this.props.globalState.populateFormsData;

      console.log(bedrooms);
      return bedrooms.map(item => {
        return (
          <option key={item} value={item}>
            {item}+ Bedrooms
          </option>
        );
      });
    }
  }

  render() {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>

          <label htmlFor="city" className="myLabel">
            City
          </label>
          <select
            name="city"
            className="filters neighborhood"
            onChange={this.props.change}
          >
            <option value="All">All Cities</option>
            {this.cities()}
          </select>

          <label htmlFor="homeType" className="myLabel">
            Home Types
          </label>
          <select
            name="homeType"
            className="filters homeType"
            onChange={this.props.change}
          >
            <option value="All">All Homes</option>
            {this.homeTypes()}
          </select>

          <label htmlFor="bedrooms" className="myLabel">
            Number of bedrooms
          </label>
          <select
            name="bedrooms"
            className="filters neighborhood"
            onChange={this.props.change}
          >
            {this.bedrooms()}
          </select>

          <div className="filters price">
            <span className="title">Price</span>
            <input
              type="text"
              name="min_price"
              className="min-price"
              onChange={this.props.change}
              value={this.props.globalState.min_price}
            />
            <input
              type="text"
              name="max_price"
              className="max-price"
              onChange={this.props.change}
              value={this.props.globalState.max_price}
            />
          </div>
          <div className="filters floor-space">
            <span className="title">Floor space</span>
            <input
              type="text"
              name="min_floor_space"
              className="min-floor-space"
              onChange={this.props.change}
              value={this.props.globalState.min_floor_space}
            />
            <input
              type="text"
              name="max_floor_space"
              className="max-floor-space"
              onChange={this.props.change}
              value={this.props.globalState.max_floor_space}
            />
          </div>
          <div className="filters extras">
            <span className="title">Extras</span>
            <label htmlFor="extras">
              <span> Elevators </span>
              <input
                type="checkbox"
                name="elvators"
                value="elvators"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span> Simming Pool </span>
              <input
                type="checkbox"
                name="swimming_pool"
                value="swimming_pool"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span> Finished basement </span>
              <input
                type="checkbox"
                name="finished_basement"
                value="finished_basement"
                onChange={this.props.change}
              />
            </label>
            <label htmlFor="extras">
              <span> Gym </span>
              <input
                type="checkbox"
                name="gym"
                value="gym"
                onChange={this.props.change}
              />
            </label>
          </div>
        </div>
      </section>
    );
  }
}
