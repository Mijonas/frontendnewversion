import React, { Component } from "react";
import SearchTermList from "./searchtermlist";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";

class SearchArea extends Component {
  /**
   * function as the container for the search UI
   * handles all changes of the classes below
   */

  state = {};

  render() {
    return (
      <div
        className="container"
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 8,
          minHeight: 500,
        }}
      >
        <div className="header" style={{ fontSize: 30, textAlign: "center" }}>
          Welcome to the Preprint-Paperscraper
        </div>

        <SearchTermList
          onAddSearchTermButton={(index) =>
            this.props.onAddSearchTermButton(index)
          }
          onDelete={(indexinsum, index) =>
            this.props.onDelete(indexinsum, index)
          }
          onDropdownChange={(indexinsum, index, value) =>
            this.props.onDropdownChange(indexinsum, index, value)
          }
          onNegation={(indexinsum, index) =>
            this.props.onNegation(indexinsum, index)
          }
          sum={this.props.sum}
          onTermChange={(indexinsum, index, value) =>
            this.props.onTermChange(indexinsum, index, value)
          }
        />

        <div style={{ textAlign: "right" }}>
          <Button onClick={this.props.onOrConnect}>Add "OR" connection</Button>
        </div>
        <Row>
          <div>Select servers which should be included</div>
          <Form>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  defaultChecked
                  onChange={() => this.props.onServerChange("medrxiv")}
                  label="medrxiv"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="biorxiv"
                  onChange={() => this.props.onServerChange("biorxiv")}
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="medrxiv & biorxiv"
                  onChange={() =>
                    this.props.onServerChange("medrxivandbiorxiv")
                  }
                  name="group1"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Lower bound date</Form.Label>
              <Form.Control
                type="date"
                onChange={(event) =>
                  this.props.onDateChange("lower", event.target.value)
                }
              />
              <Form.Text className="text-muted">
                Enter the lower bound date here: only papers newer or equal to
                that day are returned
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Upper bound date</Form.Label>
              <Form.Control
                type="date"
                onChange={(event) =>
                  this.props.onDateChange("upper", event.target.value)
                }
              />
              <Form.Text className="text-muted">
                Enter the upper bound date here: only papers older or equal to
                that day are returned
              </Form.Text>
            </Form.Group>
          </Form>
        </Row>
        <div style={{ textAlign: "center" }}>
          <Button onClick={this.props.onStartButton}>Start Search</Button>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button onClick={this.props.onCsvDownload}>Download csv</Button>
        </div>
      </div>
    );
  }
}

export default SearchArea;
