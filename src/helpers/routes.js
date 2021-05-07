import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddPlayer from '../views/AddPlayer';
import Team from '../views/Team';
import SinglePlayer from '../views/SinglePlayer';
import SignIn from '../views/SignIn';

function Routes({ players, setPlayers, user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
       component={SignIn}
        />
        <Route exact path='/team'
        component={() => <Team players={players} setPlayers={setPlayers} user={user}/>}
        />
        <Route path='/team/:firebaseKey' component={SinglePlayer}/>
        <Route path='/add-player' component={() => <AddPlayer
        setPlayers={setPlayers}
        user={user}
      />
      } />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Routes;
