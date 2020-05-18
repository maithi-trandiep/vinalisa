import React, { Component } from "react";

export default class Dropdown extends Component {
  render() {
    let listItems = '';
    if (this.props.dropdownItems) {
        listItems = this.props.dropdownItems.map((item, idx) => {
           return (<a className="dropdown-item" key={idx} href={item.href} data-toggle={item.useModal ? 'modal' : ''} data-target={item.useModal ? item.href : ''}>{item.title}</a>)
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
