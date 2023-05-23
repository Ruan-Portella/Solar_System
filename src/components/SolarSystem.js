import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="Content-Planet">
        <div data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        <div className="Planet-Cards">
          {Planets
            .map((planet) => (<PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
