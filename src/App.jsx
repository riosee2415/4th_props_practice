import React from "react";
import Btn from "./Btn";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
    };
  }

  _changeNumber = (value) => {
    this.setState((prev) => {
      return { number: value };
    });
  };

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <Btn
          title="민승"
          number={this.state.number}
          nextNumber={1}
          action={this._changeNumber}
          color="skyblue"
        />
        <Btn
          title="민수"
          number={this.state.number}
          nextNumber={2}
          action={this._changeNumber}
          color="purple"
        />
        <Btn
          title="동건"
          number={this.state.number}
          nextNumber={3}
          action={this._changeNumber}
          color="yellow"
        />
        <Btn
          title="소영"
          number={this.state.number}
          nextNumber={4}
          action={this._changeNumber}
          color="hotpink"
        />

        {this.state.number === 1 && <div>저는 귀여운 민승이에요.</div>}
        {this.state.number === 2 && <div>저는 잘생긴 민수에요.</div>}
        {this.state.number === 3 && <div>저는 매력적인 동건이에요.</div>}
        {this.state.number === 4 && <div>저는 존예여신 소영이에요.</div>}
      </div>
    );
  }
}

export default App;
