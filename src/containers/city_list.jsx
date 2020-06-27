import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCities } from '../actions/index';
import City from './city';

class CityList extends Component {
  componountWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city) => {
          return <City city={city} />;
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateReduxToProps(stateRedux) {
  return {
    cities: stateRedux.cities
  };
}

export default connect(mapStateReduxToProps, mapDispatchToProps)(CityList);
// export default CityList;

