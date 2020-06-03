import React, { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        quantity: 1,
        show: true,
      };
    }
  
    incrementItem = () => {
      this.props.incrementCounter();

      this.setState(prevState => {
        if(prevState.quantity < 100) {
          return {
            quantity: prevState.quantity + 1
          }
        } else {
          return null;
        }
      });
    }

    decrementItem = () => {
      this.props.decrementCounter();

      this.setState(prevState => {
        if(prevState.quantity > 0) {
          return {
            quantity: prevState.quantity - 1
          }
        } else {
          return null;
        }
      });
    }

    toggleClick = () => {
      this.setState({
        show: !this.state.show
      });
    }

    changeHandler = (event) => {
      this.setState({quantity: event.target.value});
    }
  
    render() {
  
      return (
        <div className="counter input-group">
          <div className="input-group-prepend">
          <button className="btn btn-dark btn-sm fa fa-minus fa-inverse fa-2x" onClick={this.decrementItem}></button>
          </div>
            <input className="inputcounter form-control" value={this.state.quantity} onChange={this.changeHandler}/>
          <div className="input-group-append">
            <button className="btn btn-dark btn-sm fa fa-plus fa-inverse fa-2x" onClick={this.incrementItem}></button>
          </div>
        </div>
      );
    }
}
