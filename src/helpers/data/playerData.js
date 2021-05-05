import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPlayers = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/team.json?orderBy="uid"&equalTo${uid}`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const addPlayer = (playerObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/team.json`, playerObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/team/${response.data.name}.json`, body)
        .then(() => {
          getPlayers(firebase.auth().currentUser.uid).then((players) => resolve(players));
        });
    }).catch((error) => reject(error));
});

export { addPlayer, getPlayers };
