import React, { Component } from "react";
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { ToggleButton } from "react-bootstrap";

import Table from "react-bootstrap/esm/Table";

class PaperDisplay extends Component {
  render() {
    return (
      <div>
        <header>
          <Row>
            <Col>
              <DropdownButton
                id="dropdown-basic-button"
                title="Change sorting of papers presented"
              >
                <Dropdown.Item
                  onClick={() => this.props.onSortChange("relevance")}
                >
                  Relevance
                </Dropdown.Item>
                <Dropdown.Item onClick={() => this.props.onSortChange("title")}>
                  Title alphabetically
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.props.onSortChange("category")}
                >
                  Category alphabetically
                </Dropdown.Item>
                <Dropdown.Item onClick={() => this.props.onSortChange("date")}>
                  Date
                </Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col>
              <Button variant="primary" onClick={this.props.onScrollUp}>
                Change your search
              </Button>
            </Col>
          </Row>

          <div>
            <h2>Paper</h2>
            <div style={{ overflow: "scroll", width: 2000 }}>
              <Table striped bordered hover responsive variant="dark">
                <thead>
                  <tr>
                    <th>Marked</th>
                    <th>Title</th>
                    <th>Version</th>
                    <th>Date</th>
                    <th>Doi</th>
                    <th>Abstract</th>
                    <th>Authors</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.paper.map((paper) => (
                    <tr key={paper.title + paper.version}>
                      <td>
                        <ToggleButton
                          type="checkbox"
                          name="Mark paper"
                          value="false"
                        >
                          Save as favorite
                        </ToggleButton>
                      </td>
                      <td style={{ width: 300 }}>{paper.title}</td>
                      <td style={{ width: 40 }}>{paper.version}</td>
                      <td style={{ width: 100 }}>{paper.date}</td>

                      <td>{paper.doi}</td>
                      <td style={{ width: 1000 }}>{paper.abstractofpaper}</td>
                      <td>{paper.authors}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default PaperDisplay;
