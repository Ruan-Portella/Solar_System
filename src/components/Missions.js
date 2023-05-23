import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div className="Content-Mission">
        <div data-testid="missions">
          <Title headline="Missões" />
          <div className="Missions">
            {missions
              .map((mission) => (<MissionCard
                key={ mission.name }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />))}
          </div>
        </div>
      </div>
    );
  }
}

export default Missions;
