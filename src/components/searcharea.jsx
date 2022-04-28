import React, { Component } from "react";
import SearchTermList from "./searchtermlist";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import { Card } from "react-bootstrap";
import { Container, Col } from "react-bootstrap";

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
          marginTop: 20,
          minHeight: 500,
        }}
      >
        <Card style={{ marginTop: 20, marginBottom: 20, borderRadius: 12 }}>
          <Container>
            <Row>
              <Col sm={10}>
                <Card.Title style={{ margin: 20 }}>
                  Welcome to megaLIT!
                </Card.Title>
                <Card.Text style={{ margin: 20 }}>
                  Find the right preprints for your project!!
                </Card.Text>
              </Col>
              <Col sm={2}>
                <img
                  alt=""
                  src="/logo.jpeg"
                  width="100"
                  height="100"
                  className="d-inline-block align-top"
                />
              </Col>
            </Row>
          </Container>
        </Card>

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
          <Button
            variant="secondary"
            style={{ width: 80, borderRadius: 25 }}
            onClick={this.props.onOrConnect}
          >
            + OR
          </Button>
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
          <Button
            style={{ borderRadius: 25 }}
            onClick={this.props.onStartButton}
          >
            Start Search
          </Button>
        </div>
      </div>
    );
  }
}

export default SearchArea;
