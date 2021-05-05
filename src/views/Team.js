import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../components/PlayerCard';

function Team({ players }) {
  return (
    <>
    <div className='App'>
      {players.map((playerInfo) => (
        <PlayerCard
        key={playerInfo.firebaseKey}
        name={playerInfo.name}
        position={playerInfo.position}
        imageUrl={playerInfo.imageUrl}
        />
      ))}
    </div>
    </>
  );
}

Team.propTypes = {
  players: PropTypes.array.isRequired
};

export default Team;
