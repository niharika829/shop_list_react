import React, { Component } from "react";
import MainCount from "./maincount";
import Nav from "./navbar.js";
export class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    };
  }
  reset = () => {
    const resetlist = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: resetlist });
  };
  handledelete = (id) => {
    const newcounter = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters: newcounter });
  };
  countervalue = (id) => {
    console.log(id);
    const inc = this.state.counters.map((c) => {
      if (c.id === id) {
        c.value += 1;
      }
      return c;
    });
    this.setState({ counters: inc });
  };
  decountervalue = (id) => {
    console.log(id);
    const dec = this.state.counters.map((c) => {
      if (c.id === id) {
        c.value -= 1;
      }
      return c;
    });
    this.setState({ counters: dec });
  };
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "#7d0c99",
            width: "45%",
            margin: "auto",
          }}
        >
          <Nav
            counters={this.state.counters.filter((c) => c.value > 0).length}
          />
          <MainCount
            reset={this.reset}
            counters={this.state.counters}
            decountervalue={this.decountervalue}
            countervalue={this.countervalue}
            handledelete={this.handledelete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default app;
