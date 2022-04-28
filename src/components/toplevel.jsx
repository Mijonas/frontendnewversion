import React, { Component } from "react";
import SearchArea from "./searcharea";
import PaperDisplay from "./paperdisplay";
import { v4 as uuidv4 } from "uuid";

class TopLevel extends Component {
  state = {
    paper: [],
    size: "5",
    sort: "relevance",
    server: "medrxiv",
    date: [[], []],
    sum: [
      {
        terms: [
          {
            id: uuidv4(),
            value: "",
            field: {
              title: true,
              abstract: false,
              category: false,
              author: false,
              doi: false,
            },

            negated: false,
          },
          {
            id: uuidv4(),
            value: "",
            field: {
              title: true,
              abstract: false,
              category: false,
              author: false,
              doi: false,
            },

            negated: false,
          },
        ],
      },
    ],
  };

  render() {
    return (
      <div>
        <SearchArea
          onCsvDownload={this.handleCsvDownload}
          onServerChange={(server) => this.handleServerChange(server)}
          sum={this.state.sum}
          onDropdownChange={(indexinsum, index, value) =>
            this.handleDropdownChange(indexinsum, index, value)
          }
          onNegation={(indexinsum, index) =>
            this.handleNegationChecked(indexinsum, index)
          }
          onTermChange={(indexinsum, index, value) =>
            this.handleTermChange(indexinsum, index, value)
          }
          onAddSearchTermButton={(index) => this.handleAddButton(index)}
          onDelete={(indexinsum, index) => this.handleDelete(indexinsum, index)}
          onStartButton={this.handleStartButton}
          onOrConnect={this.handleOrConnect}
          onDateChange={(datebound, value) =>
            this.handleDateChange(datebound, value)
          }
        />

        <PaperDisplay
          paper={this.state.paper}
          onScrollUp={this.handleScrollUp}
          onSortChange={(sortmode) => this.handleSortChange(sortmode)}
        />
      </div>
    );
  }

  handleCsvDownload = () => {
    window.open("http://localhost:8080/query/csv");
  };

  handleSortChange = (sortmode) => {
    this.setState({ sort: sortmode }, function () {
      this.handleStartButton();
    });
  };

  handleScrollUp = () => {
    window.scroll({
      top: document.body.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  //dateform: YYYY-MM-DD
  handleDateChange = (datebound, value) => {
    let statecopy = [...this.state.date];

    if (datebound === "lower") {
      statecopy[0] = value;
    }
    if (datebound === "upper") {
      statecopy[1] = value;
    }
    this.setState({ date: statecopy });
  };
  handleServerChange = (server) => {
    const newserver = server;
    console.log(this.state);
    this.setState({ server: newserver });
  };
  handleNegationChecked = (indexinsum, index) => {
    let sumcopy = [...this.state.sum];
    const termscopy = sumcopy[indexinsum].terms;

    termscopy[index].negated = !termscopy[index].negated;
    this.setState({ sum: sumcopy });
  };

  handleOrConnect = () => {
    let sumcopy = [...this.state.sum];
    sumcopy = sumcopy.concat({
      terms: [
        {
          id: uuidv4(),
          value: "",
          field: {
            title: true,
            abstract: false,
            category: false,
            author: false,
            doi: false,
          },

          negated: false,
        },
      ],
    });
    this.setState({ sum: sumcopy });
  };

  handleTermChange = (indexinsum, index, value) => {
    let sumcopy = [...this.state.sum];
    const termscopy = sumcopy[indexinsum].terms;

    termscopy[index].value = value;

    this.setState({ sum: sumcopy });
  };

  handleStartButton = () => {
    //Prüfe: ist erstes feld ausgefüllt
    //Prüfe, ist mind. ein field angeklickt ---> eventuell sonst standard title
    const string = JSON.stringify(this.state);

    if (this.state.sum[0].terms[0].value === "") {
      alert("First search term cannot be empty");
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: string,
    };
    fetch("http://localhost:8080/query/api", requestOptions)
      .then((response) => response.json())
      .then((paper) => this.setState({ paper }));

    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  //for Field
  handleDropdownChange = (indexinsum, index, value) => {
    let sumcopy = [...this.state.sum];
    const termscopy = sumcopy[indexinsum].terms;

    const fieldselected = value;
    if (fieldselected === "title") {
      termscopy[index].field.title = !termscopy[index].field.title;
    }
    if (fieldselected === "abstract") {
      termscopy[index].field.abstract = !termscopy[index].field.abstract;
    }
    if (fieldselected === "category") {
      termscopy[index].field.category = !termscopy[index].field.category;
    }
    if (fieldselected === "author") {
      termscopy[index].field.author = !termscopy[index].field.author;
    }
    if (fieldselected === "doi") {
      termscopy[index].field.doi = !termscopy[index].field.doi;
    }

    this.setState({ sum: sumcopy });
  };

  handleDelete = (indexinsum, index) => {
    let sumcopy = [...this.state.sum];
    const termscopy = sumcopy[indexinsum].terms;
    const deleteid = termscopy[index].id;

    if (indexinsum === 0)
      if (termscopy.length === 1)
        return alert(
          "There must be atleast one search term in the first section"
        );

    if (indexinsum !== 0)
      if (termscopy.length === 1) {
        sumcopy = sumcopy.filter((c, i) => i !== indexinsum);
        this.setState({ sum: sumcopy });
        return;
      } //Delete this terms part from sum

    let terms = termscopy.filter((c) => c.id !== deleteid);

    sumcopy[indexinsum] = { terms };

    this.setState({ sum: sumcopy });
  };

  handleAddButton = (ind) => {
    let sumcopy = [...this.state.sum];

    const terms = sumcopy[ind].terms.concat({
      id: uuidv4(),
      value: "",
      field: {
        title: true,
        abstract: false,
        category: false,
        author: false,
        doi: false,
      },

      negated: false,
    });

    sumcopy[ind] = { terms };
    this.setState({ sum: sumcopy });
  };
}

export default TopLevel;
