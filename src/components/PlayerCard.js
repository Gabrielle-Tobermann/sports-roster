import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { deletePlayer } from '../helpers/data/playerData';
import AddPlayerForm from './AddPlayerForm';

function PlayerCard({
  name,
  imageUrl,
  position,
  user,
  uid,
  setPlayers,
  firebaseKey
}) {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    if (type === 'delete') {
      deletePlayer(firebaseKey, user).then((resp) => setPlayers(resp));
    } else if (type === 'edit') {
      setEditing((prevState) => !prevState);
    }
  };

  return (
    <div>
       <Card>
        <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-primary" tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-dark">{position}</CardSubtitle>
          <Button className="card-button" color="danger" onClick={() => handleClick('delete')}>Delete Player</Button>
          <Button className="card-button" color="primary" onClick={() => handleClick('edit')}>Edit Player</Button>
        </CardBody>
        {
      editing && <AddPlayerForm
      setPlayers={setPlayers}
      name={name}
      firebaseKey={firebaseKey}
      imageUrl={imageUrl}
      position={position}
      user={user}
      uid={uid}
      editing={editing}
      setEditing={setEditing}
    />
  }
      </Card>
    </div>
  );
}

PlayerCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  user: PropTypes.any,
  uid: PropTypes.string,
  setPlayers: PropTypes.func.isRequired,
  firebaseKey: PropTypes.string.isRequired
};

export default PlayerCard;
