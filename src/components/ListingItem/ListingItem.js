import React from 'react';
import PropTypes from 'prop-types';

import { listingShape } from '../../propz/listingsProp';
import { formatPrice } from '../../helper';

import './ListingItem.css';

class ListingItem extends React.Component {
  static propTypes = {
    listing: listingShape,
    index: PropTypes.number,
    onSelect: PropTypes.func,
  }

  listingClick = (e) => {
    e.stopPropagation();
    console.error('event', e);
    // const {listing} = this.props.listing.id
    const { listing, onSelect } = this.props;
    onSelect(listing.id);
  }

  render () {
    const { listing, index } = this.props;
    return (
      // <h1>Hello</h1>
      <li className='ListingItem text-center' onClick={this.listingClick}>
        <span className="col-xs-2"><strong>Listing {index + 1}:</strong></span>
        <span className="col-xs-4">{listing.address} <br /> {listing.city}, {listing.state} {listing.zip}</span>
        <span className="col-xs-3">{listing.numBeds} Bed/{listing.numBaths} Bath <br /> Built in {listing.yearBuilt}</span>
        <span className="col-xs-3">{formatPrice(listing.price)} <br /> {listing.squareFootage} ft<sup>2</sup></span>
      </li>
    );
  }
}

export default ListingItem;
