import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Box from './Box';
import ModalOffer from './ModalOffer';


class ListOffer extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (id) => {
    this.props.addToCart(id); 
  }
  
  render(){
    let itemList = this.props.items.map((item, idx) => {
      return (
        <div className="col-lg-4 col-sm-6 mb-4" key={idx}>
          <Box id={`box${idx+1}`} id={item.id} modalHref={`#modalVin${idx+1}`} title={item.title} description={`€${item.price}`} imgUrl={item.imgUrl} addToCart={()=>{this.handleClick(item.id)}} />
          <ModalOffer id={`modalVin${idx+1}`} title={item.title} intro={`€${item.price}`} imgUrl={item.imgUrl} descField={item.field} descWine={item.wine} descProducer={item.producer} />
        </div>
      );
    });

    return (
      <div className="container page-section section-gallery" id={this.props.id}>
          <div className="text-center">
            <h2 className="section-heading text-uppercase">{this.props.title}</h2>
            <h3 className="section-subheading text-muted">{this.props.subtitle}</h3>
          </div>
          <div className="row">
            {itemList}
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {dispatch(addToCart(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOffer)