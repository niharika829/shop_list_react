import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
export class counter extends Component {
  constructor(props) {
    super(props);
    this.fitvalue = this.fitvalue.bind(this);
    this.setcolor = this.setcolor.bind(this);
  }

  fitvalue() {
    return this.props.value === 0 ? "zero" : this.props.value;
  }
  setcolor() {
    let styles = "badge m-2 badge-";
    styles += this.props.value === 0 ? "warning" : "primary";
    return styles;
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron style={{ width: "80%", margin: "auto" }}>
          {this.props.children}
          <p className={this.setcolor()}>{this.fitvalue()}</p>
          <button
            onClick={() => this.props.countervalue(this.props.id)}
            className="btn btn-primary btn-sm"
          >
            increment
          </button>
          <button
            onClick={() => this.props.decountervalue(this.props.id)}
            className="btn btn-success btn-sm"
            disabled={!this.props.value}
          >
            decrement
          </button>
          <button
            onClick={() => this.props.handledelete(this.props.id)}
            className="btn btn-warning btn-sm"
            style={{ float: "right" }}
          >
            delete
          </button>
        </Jumbotron>
        <br />
      </React.Fragment>
    );
  }
}

export default counter;
