import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddPlayer from '../views/AddPlayer';
import Team from '../views/Team';
import SinglePlayer from '../views/SinglePlayer';
import SignIn from '../views/SignIn';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (remainder) => (user
    ? (<Component {...remainder} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: remainder.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

function Routes({ players, setPlayers, user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
       component={() => <SignIn user={user}/>}
        />
        <PrivateRoute
        exact path='/team'
        user={user}
        component={() => <Team players={players} setPlayers={setPlayers} user={user}/>}
        />
        <PrivateRoute
        path='/team/:firebaseKey'
        component={SinglePlayer}
        user={user}
        />
        <PrivateRoute
        path='/add-player'
        user={user}
        component={() => <AddPlayer
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
