import React, { Component } from "react";
import Button from "react-bootstrap/esm/Button";
/**
 * Class to represent a single SearchTermField with a delete button
 */

class SearchTermField extends Component {
  render() {
    return (
      <div style={{ marginLeft: 10 }}>
        <label>
          SearchTerm:
          <input
            type="text"
            onChange={(event) => this.props.onTermChange(event.target.value)}
          />
        </label>
        <Button
          variant="danger"
          size="sm"
          style={{ marginLeft: 10, marginRight: 10 }}
          onClick={() => {
            this.props.onDelete();
          }}
        >
          Delete Search Term
        </Button>
      </div>
    );
  }
}

export default SearchTermField;
