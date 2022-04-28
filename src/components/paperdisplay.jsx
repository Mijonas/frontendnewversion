import React, { Component } from "react";
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { FormCheck } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/esm/Table";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";

class PaperDisplay extends Component {
  render() {
    return (
      <div>
        <Card
          className="mb-2"
          variant="light"
          border="dark"
          style={{
            borderRadius: 12,
            marginRight: 20,
            marginLeft: 20,
            marginTop: 60,
            marginBottom: 20,
            backgroundColor: "#DDE2FA",
          }}
        >
          <header>
            <Container>
              <Row style={{ marginTop: 20 }}>
                <Col xs={2}>
                  <FormCheck
                    type="switch"
                    id="favorite"
                    label="Show only favorites"
                    onChange={this.props.onShowFavorites}
                    style={{ marginTop: 7 }}
                  />
                </Col>
                <Col xs={2}>
                  <Button
                    variant="outline-dark"
                    style={{ borderRadius: 25 }}
                    onClick={this.props.onCsvDownload}
                  >
                    Export csv
                  </Button>
                </Col>
                <Col xs={4}>
                  <DropdownButton
                    variant="outline-dark"
                    id="dropdown-basic-button"
                    title="Change sorting of papers presented"
                  >
                    <Dropdown.Item
                      onClick={() => this.props.onSortChange("relevance")}
                    >
                      Relevance
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => this.props.onSortChange("title")}
                    >
                      Title alphabetically
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => this.props.onSortChange("category")}
                    >
                      Category alphabetically
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => this.props.onSortChange("date")}
                    >
                      Date
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col xs={4}>
                  <DropdownButton
                    variant="outline-dark"
                    id="dropdown-basic-button"
                    title="How many papers should be displayed"
                  >
                    <Dropdown.Item
                      onClick={() => this.props.onSizeChange("25")}
                    >
                      25
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => this.props.onSizeChange("50")}
                    >
                      50
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => this.props.onSizeChange("75")}
                    >
                      75
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => this.props.onSizeChange("100")}
                    >
                      100
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Container>

            <div>
              <div>
                <Table
                  striped
                  bordered
                  hover
                  responsive
                  variant="light"
                  style={{
                    marginLeft: 20,
                    marginTop: 20,
                    marginRight: 20,
                    overflow: "scroll",
                  }}
                >
                  <thead>
                    <tr>
                      <th>Marked</th>
                      <th>Title</th>
                      <th>Abstract</th>
                      <th>Authors</th>
                      <th>Date</th>
                      <th>Category</th>
                      <th>Server</th>

                      <th>Version</th>
                      <th>Doi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.paper.map((paper) => (
                      <tr key={paper.title + paper.version}>
                        <td>
                          <Form.Check
                            onClick={() => this.props.onMarkChange(paper.id)}
                          ></Form.Check>
                        </td>
                        <td style={{ width: 300 }}>{paper.title}</td>
                        <td style={{ width: 1000 }}>{paper.abstractofpaper}</td>
                        <td>{paper.authors}</td>
                        <td style={{ width: 200 }}>{paper.date}</td>
                        <td style={{ width: 300 }}>{paper.category}</td>
                        <td style={{ width: 300 }}>{paper.server}</td>
                        <td style={{ width: 40 }}>{paper.version}</td>
                        <td>{paper.doi}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </header>
        </Card>
      </div>
    );
  }
}

export default PaperDisplay;
