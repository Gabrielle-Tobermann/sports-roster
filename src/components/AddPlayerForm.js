import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import { addPlayer } from '../helpers/data/playerData';

function AddPlayerForm(
  name,
  position,
  imageUrl,
  setPlayers
) {
  const [player, setPlayer] = useState({
    name: name || '',
    position: position || '',
    imageUrl: imageUrl || '',
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    addPlayer(player).then((playerObj) => setPlayers(playerObj));
  };

  return (
    <>
      <Form>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input type="text" name="name" id="playerName" onChange={handleInputChange} placeholder="Enter the player's name" />
      </FormGroup>
      <FormGroup>
        <Label for="name">Position:</Label>
        <Input type="text" name="position" id="playerPosition" onChange={handleInputChange} placeholder="Enter the player's position" />
      </FormGroup>
      <FormGroup>
        <Label for="image">Photo:</Label>
        <Input type="text" name="image" id="playerImage" onChange={handleInputChange} placeholder="Enter the player's photo" />
      </FormGroup>
      <Button type="submit" onClick={handleSubmit}>Submit New Player</Button>
      </Form>
    </>
  );
}

export default AddPlayerForm;
