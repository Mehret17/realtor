import React from 'react';

import { listingOptionalShape } from '../../propz/listingsProp';
import { formatPrice } from '../../helper';
import './Building.css';

class Building extends React.Component {
  static propTypes = { listing: listingOptionalShape };
  render () {
    const { listing } = this.props;
    if (listing.nope) {
      return (
        <div className="Building text-center">
          <h1 className="unknown-listing"><span className="glyphicon glyphicon-arrow-left"></span>Select a listing! </h1>
        </div>
      );
    }
    return (
      <div className="Building">
        <div className="row">
          <div className="col-xs-6">
            <img className="building-image" src={listing.imageUrl} alt="Selected Building" />
          </div>
          <div className="col-xs-6">
            <h3>{formatPrice(listing.price)}</h3>
            <p>{formatPrice(listing.estimatedMonthlyMorgage)} /month</p>
            <h4>{listing.address} {listing.city}, {listing.state} {listing.zip}</h4>
            <h5>{listing.numBeds} Bed/{listing.numBaths} Batch</h5>
            <h5>{listing.squareFootage} ft<sup>2</sup></h5>
            <p>{listing.description}</p>
            <p>{listing.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Building;
