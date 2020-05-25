import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        quantity: 1,
        show: true,
        max: 100,
        min: 0
      };
    }
  
    incrementItem = () => {
      this.props.increaseCounter();

      this.setState(prevState => {
        if(prevState.quantity < 10) {
          return {
            quantity: prevState.quantity + 1
          }
        } else {
          return null;
        }
      });
    }

    decreaseItem = () => {
      this.props.decreaseCounter();

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

    handleChange = (event) => {
      this.setState({quantity: event.target.value});
    }
  
    render() {
  
      return (
        <div className="counter input-group">
          <div className="input-group-prepend">
              <button className="btn btn-dark btn-sm fa fa-plus fa-inverse fa-2x" onClick={this.incrementItem}></button>
          </div>
              <input className="inputcounter form-control" value={this.state.quantity} onChange={this.handleChange}/>
          <div className="input-group-append">
              <button className="btn btn-dark btn-sm fa fa-minus fa-inverse fa-2x" onClick={this.decreaseItem}></button>
            </div>
        </div>
      );
    }
  }
  
export default Counter;