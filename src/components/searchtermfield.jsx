import React, { Component } from "react";
import { Form } from "react-bootstrap";

/**
 * Class to represent a single SearchTermField with a delete button
 */

class SearchTermField extends Component {
  render() {
    return (
      <div style={{ marginLeft: 10 }}>
        <Form>
          <Form.Control
            type="text"
            onChange={(event) => this.props.onTermChange(event.target.value)}
            placeholder="Searchterm..."
          />
        </Form>
      </div>
    );
  }
}

export default SearchTermField;
