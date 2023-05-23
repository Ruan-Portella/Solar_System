import React from 'react';

import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const altImage = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card" className="Planet-Card">
        <p data-testid="planet-name" className="Planet-Name">{ planetName }</p>
        <img src={ planetImage } alt={ altImage } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string,
  planetName: PropTypes.string,
}.required;

export default PlanetCard;
