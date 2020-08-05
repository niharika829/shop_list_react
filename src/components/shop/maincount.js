import React, { Component } from "react";
import Counter from "./counter.js";
export class maincount extends Component {
  render() {
    return (
      <div>
        <button
          style={{ marginLeft: 10 }}
          className="btn btm-info btn-sm"
          onClick={this.props.reset}
        >
          reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            handledelete={this.props.handledelete}
            id={counter.id}
            countervalue={this.props.countervalue}
            decountervalue={this.props.decountervalue}
          >
            <p>counter #{counter.id}</p>
          </Counter>
        ))}
      </div>
    );
  }
}

export default maincount;
