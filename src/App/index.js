import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/routes';
import './App.scss';
import firebaseConfig from '../helpers/apiKeys';
import { getPlayers } from '../helpers/data/playerData';

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  useEffect(() => {
    getPlayers(user).then((response) => setPlayers(response));
  }, []);

  return (
   <>
   <Router>
     <NavBar
     user={user}
     />
     <Routes
     players={players}
     setPlayers={setPlayers}
     user={user}
     />
   </Router>
   </>
  );
}

export default App;
