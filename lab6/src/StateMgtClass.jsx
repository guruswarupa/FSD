import React, { Component } from 'react';
class Statemgtclass extends Component {
    state = { number: 0 };
    componentDidMount() {
        // Reset number after 10 seconds (10000 ms)
        this.timer = setTimeout(() => {
            this.setState({ number: 0 });
        }, 10000);
    }

    increment = () => this.setState({ number: this.state.number + 1 });
    decrement = () => {
        if (this.state.number > 0)
            this.setState({ number: this.state.number - 1 });
    };
    reset = () => this.setState({ number: 0 });
    double = () => this.setState({ number: this.state.number * 2 });
    render() {
        return (
            <div>
                <h3>Number: {this.state.number}</h3>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.double}>Double</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}
export default Statemgtclass;