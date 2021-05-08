import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../components/PlayerCard';

function Team({ players, user, setPlayers }) {
  return (
    <>
    <div className='App d-flex flex-wrap justify-content-center'>
      {players.map((playerInfo) => (
        <PlayerCard
        key={playerInfo.firebaseKey}
        name={playerInfo.name}
        position={playerInfo.position}
        imageUrl={playerInfo.imageUrl}
        user={user}
        uid={playerInfo.uid}
        setPlayers={setPlayers}
        firebaseKey={playerInfo.firebaseKey}
        />
      ))}
    </div>
    </>
  );
}

Team.propTypes = {
  players: PropTypes.array.isRequired,
  user: PropTypes.any,
  setPlayers: PropTypes.func
};

export default Team;
