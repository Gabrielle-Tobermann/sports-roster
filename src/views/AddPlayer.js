import React from 'react';
import PropTypes from 'prop-types';
import AddPlayerForm from '../components/AddPlayerForm';

function AddPlayer({ setPlayers }) {
  return (
    <>
     <AddPlayerForm
     setPlayers={setPlayers}
     />
    </>
  );
}

AddPlayer.propTypes = {
  setPlayers: PropTypes.func.isRequired
};

export default AddPlayer;
