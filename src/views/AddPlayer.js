import React from 'react';
import PropTypes from 'prop-types';
import AddPlayerForm from '../components/AddPlayerForm';

function AddPlayer({ setPlayers, user }) {
  return (
    <div className="add-player-view">
     <AddPlayerForm
     setPlayers={setPlayers}
     user={user}
     />
    </div>
  );
}

AddPlayer.propTypes = {
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default AddPlayer;
