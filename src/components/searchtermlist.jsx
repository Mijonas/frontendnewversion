import React, { Component } from "react";
import SearchTermField from "./searchtermfield";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import FormCheck from "react-bootstrap/esm/FormCheck";
import Form from "react-bootstrap/esm/Form";
import { Card, Container } from "react-bootstrap";
import { CloseButton } from "react-bootstrap";
import { Badge } from "react-bootstrap";

/**
 * Class is used to represent the list of search terms and is embedded in the container
 * Each Item of the list consists of a AND OR dropdown menu, an input field for the search term
 * a delete button and a dropdown menu to describe the search field
 */
class SearchTermList extends Component {
  render() {
    return this.props.sum.map((terms_i, indexinsum) => {
      return (
        <div key={indexinsum}>
          <Row>
            <div>
              {indexinsum !== 0 && (
                <div
                  style={{
                    marginTop: 20,
                    fontWeight: "bold",
                  }}
                >
                  <h3>
                    <Badge
                      bg="secondary"
                      style={{
                        fontSize: 19,
                        fontWeight: 400,
                      }}
                    >
                      OR
                    </Badge>
                  </h3>
                </div>
              )}
            </div>
          </Row>
          <div className="termMapping">
            {terms_i.terms.map((list, index) => {
              //conditional variant of button

              return (
                <Card
                  key={index}
                  style={{
                    marginTop: 10,
                    borderRadius: 12,
                    backgroundColor: "#DDE2FA",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      margin: 20,
                    }}
                  >
                    <Container>
                      <Row key={list.id}>
                        <Col xs={11}>
                          <SearchTermField
                            id={list.id}
                            onTermChange={(value) =>
                              this.props.onTermChange(indexinsum, index, value)
                            }
                          />
                        </Col>

                        <Col>
                          <CloseButton
                            style={{ marginLeft: 40, marginTop: 8 }}
                            onClick={() => {
                              this.props.onDelete(indexinsum, index);
                            }}
                          ></CloseButton>
                        </Col>
                      </Row>

                      <Row style={{ marginTop: 20 }}>
                        <Col className="Negation">
                          <FormCheck
                            style={{ marginTop: 24 }}
                            type="switch"
                            id="custom-switch"
                            label="Negate search term"
                            onChange={() =>
                              this.props.onNegation(indexinsum, index)
                            }
                          />
                        </Col>
                        <Col>
                          <div>Search in</div>
                          <Form label="Select fields to search in">
                            {["checkbox"].map((type) => (
                              <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                  inline
                                  defaultChecked
                                  onChange={() =>
                                    this.props.onDropdownChange(
                                      indexinsum,
                                      index,
                                      "title"
                                    )
                                  }
                                  label="title"
                                  name="group1"
                                  type={type}
                                  id={`inline-${type}-1`}
                                />
                                <Form.Check
                                  inline
                                  label="abstract"
                                  onChange={() =>
                                    this.props.onDropdownChange(
                                      indexinsum,
                                      index,
                                      "abstract"
                                    )
                                  }
                                  name="group1"
                                  type={type}
                                  id={`inline-${type}-2`}
                                />
                                <Form.Check
                                  inline
                                  label="category"
                                  onChange={() =>
                                    this.props.onDropdownChange(
                                      indexinsum,
                                      index,
                                      "category"
                                    )
                                  }
                                  name="group1"
                                  type={type}
                                  id={`inline-${type}-3`}
                                />
                                <Form.Check
                                  inline
                                  label="author"
                                  onChange={() =>
                                    this.props.onDropdownChange(
                                      indexinsum,
                                      index,
                                      "author"
                                    )
                                  }
                                  name="group1"
                                  type={type}
                                  id={`inline-${type}-3`}
                                />
                                <Form.Check
                                  inline
                                  label="doi"
                                  onChange={() =>
                                    this.props.onDropdownChange(
                                      indexinsum,
                                      index,
                                      "doi"
                                    )
                                  }
                                  name="group1"
                                  type={type}
                                  id={`inline-${type}-3`}
                                />
                              </div>
                            ))}
                          </Form>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Card>
              );
            })}
          </div>

          <div style={{ textAlign: "right" }}>
            <Button
              variant="primary"
              onClick={() => {
                this.props.onAddSearchTermButton(indexinsum);
              }}
              style={{
                width: 80,
                marginBottom: 10,
                marginTop: 20,
                borderRadius: 25,
              }}
            >
              + AND
            </Button>
          </div>
        </div>
      );
    });
  }
}

export default SearchTermList;
