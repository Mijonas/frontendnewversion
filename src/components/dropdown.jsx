import React, { Component } from "react";
/**
 * Class is used for dropdown menus for the search field and the bool operation
 */
class Dropdown extends Component {
  render() {
    return (
      <div>
        <label style={{ marginRight: 10 }}>{this.props.label}</label>
        <select onChange={(event) => this.props.onChange(event.target.value)}>
          {this.props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Dropdown;
