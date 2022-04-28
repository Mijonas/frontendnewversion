import React, { Component } from "react";
import SearchTermField from "./searchtermfield";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import FormCheck from "react-bootstrap/esm/FormCheck";
import Form from "react-bootstrap/esm/Form";

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
                  OR
                </div>
              )}
            </div>
          </Row>
          <div className="termMapping">
            {terms_i.terms.map((list, index) => {
              //conditional variant of button

              return (
                <Row key={list.id}>
                  <div
                    style={{
                      display: "flex",
                      margin: 20,
                    }}
                  >
                    <Col md="auto">
                      <SearchTermField
                        id={list.id}
                        onDelete={() => {
                          this.props.onDelete(indexinsum, index);
                        }}
                        onTermChange={(value) =>
                          this.props.onTermChange(indexinsum, index, value)
                        }
                      />
                    </Col>
                    <Col className="Negation">
                      <FormCheck
                        type="switch"
                        id="custom-switch"
                        label="Negate search term"
                        onChange={() =>
                          this.props.onNegation(indexinsum, index)
                        }
                      />
                    </Col>
                    <Col>
                      <div style={{ border: "1px solid rgba(0, 0, 0, 0.8)" }}>
                        Select fields to search in
                      </div>
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
                  </div>
                </Row>
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
                marginBottom: 10,
                marginTop: 20,
              }}
            >
              Add Search Term
            </Button>
          </div>
        </div>
      );
    });
  }
}

export default SearchTermList;
