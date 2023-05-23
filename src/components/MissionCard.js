import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="mission-name">{ name }</p>
        <div className="mission-cardInfo">
          <p data-testid="mission-year" className="mission-year">{ year }</p>
          <p data-testid="mission-country" className="mission-country">{ country }</p>
          <p
            data-testid="mission-destination"
            className="mission-destination"
          >
            { destination}

          </p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.required;

export default MissionCard;
