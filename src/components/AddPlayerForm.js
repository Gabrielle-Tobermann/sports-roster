import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addPlayer } from '../helpers/data/playerData';

function AddPlayerForm(
  {
    // name,
    // position,
    // imageUrl,
    setPlayers,
    // uid,
    user,
  }
) {
  const [player, setPlayer] = useState({
    name: '',
    position: '',
    imageUrl: '',
    uid: user.uid
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(player, user).then((playerObj) => setPlayers(playerObj));
  };

  return (
    <>
      <Form>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input type="text" name="name" id="playerName" value={player.name} onChange={handleInputChange} placeholder="Enter the player's name" />
      </FormGroup>
      <FormGroup>
        <Label for="name">Position:</Label>
        <Input type="text" name="position" id="playerPosition" value={player.position} onChange={handleInputChange} placeholder="Enter the player's position" />
      </FormGroup>
      <FormGroup>
        <Label for="image">Photo:</Label>
        <Input type="text" name="imageUrl" id="playerImage" value={player.imageUrl} onChange={handleInputChange} placeholder="Enter the player's photo" />
      </FormGroup>
      <Button type="submit" onClick={handleSubmit}>Submit New Player</Button>
      </Form>
    </>
  );
}

AddPlayerForm.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  imageUrl: PropTypes.string,
  uid: PropTypes.string,
  setPlayers: PropTypes.func,
  user: PropTypes.any,
};

export default AddPlayerForm;
