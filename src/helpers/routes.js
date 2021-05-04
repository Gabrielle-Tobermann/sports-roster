import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddPlayer from '../components/AddPlayer';
import Team from '../components/Team';
import SinglePlayer from '../components/SinglePlayer';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Team}/>
        <Route path='/team/:firebaseKey' component={SinglePlayer}/>
        <Route path='/add-player' component={AddPlayer} />
      </Switch>
    </div>
  );
}

export default Routes;
