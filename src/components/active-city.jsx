import React, { Component } from 'react';

class ActiveCity extends Component {
  render() {
    return (
      <div className="active-city">
        <div>{this.props.city.name}</div>
        <div>{this.props.city.address}</div>
      </div>
    );
  }
  
};

export default ActiveCity;