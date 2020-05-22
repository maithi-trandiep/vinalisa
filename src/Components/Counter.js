import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        quantity: 1,
        show: true,
        max: 10,
        min: 0
      };
    }
  
    IncrementItem = () => {
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
    DecreaseItem = () => {
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
    ToggleClick = () => {
      this.setState({
        show: !this.state.show
      });
    }
    handleChange = (event) => {
      this.setState({quantity: event.target.value});
    }
  
    render() {
  
      return (
        <div className="counter">
            <button className="btn btn-dark btn-sm fa fa-plus fa-inverse fa-2x" onClick={this.IncrementItem}></button>
            <input className="inputcounter" value={this.state.quantity} onChange={this.handleChange}/>
            <button className="btn btn-dark btn-sm fa fa-minus fa-inverse fa-2x" onClick={this.DecreaseItem}></button>
        </div>
      );
    }
  }
  
export default Counter;