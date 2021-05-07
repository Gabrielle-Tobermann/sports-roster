import PropTypes from 'prop-types';
import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function PlayerCard({
  name,
  imageUrl,
  position,
  user,
}) {
  console.warn(user);
  return (
    <div>
       <Card>
        <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{position}</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

PlayerCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  user: PropTypes.any
};

export default PlayerCard;
