import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Mission extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions-container">
        <div className="missions-title">
          <Title headline="Missões" />
        </div>
        { missions.map(({ name, year, country, destination }) => (
          <MissionCard
            key={ name }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />
        ))}
      </div>
    );
  }
}

export default Mission;
