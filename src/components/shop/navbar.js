import React, { Component } from "react";

export class navbar extends Component {
  render() {
    return (
      <div style={{ fontSize: 40, color: "white", marginLeft: 10 }}>
        <b> Total Unique Items :-</b>
        <span className="badge badge-pill badge-secondary">
          {this.props.counters}
        </span>
      </div>
    );
  }
}

export default navbar;
