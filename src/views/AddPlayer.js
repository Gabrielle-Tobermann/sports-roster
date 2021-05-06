import React from 'react';
import PropTypes from 'prop-types';
import AddPlayerForm from '../components/AddPlayerForm';

function AddPlayer({ setPlayers, user }) {
  return (
    <>
     <AddPlayerForm
     setPlayers={setPlayers}
     user={user}
     />
    </>
  );
}

AddPlayer.propTypes = {
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.any,
  name: PropTypes.string,
  position: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default AddPlayer;
