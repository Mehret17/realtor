import React from 'react';
// import PropTypes from 'prop-types';

import { listingShape } from '../../propz/listingsProp';
import './ListingItem.css';

class ListingItem extends React.Component {
  static propTypes  = {
    listing: listingShape,
  }
  render () {
    const {listing} = this.props;
    return (
      // <h1>Hello</h1>
      <li>{listing.price}</li>
    );
  }
}

export default ListingItem;
