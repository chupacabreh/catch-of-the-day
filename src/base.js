import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDPdknw-BUtxMBloiA_WHfPszv4LcX1VSI",
  authDomain: "cach-of-the-day-matt-freitas.firebaseapp.com",
  databaseURL: "https://cach-of-the-day-matt-freitas.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base; 