import React, { Component } from 'react';
import * as RouterDom from "react-router-dom";

export default class Dropdown extends Component {
  render() {
    let listItems = '';
    if (this.props.dropdownItems) {
        listItems = this.props.dropdownItems.map((item, idx) => {
           return (<RouterDom.Link className="dropdown-item" key={idx} to={item.link} data-toggle={item.useModal ? 'modal' : ''} data-target={item.useModal ? item.modalId : ''}>{item.title}</RouterDom.Link>)
        });
    }
    return (
        <div className="dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{this.props.title}</a>
            <div className="dropdown-menu">
                {listItems}
            </div>
        </div>
    );
  }
}
