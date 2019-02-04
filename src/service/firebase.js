import firebase from 'firebase'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDnjw0aEuhQlhAyfPTgQedh1PH2R6g7bL8",
  authDomain: "chatc-50392.firebaseapp.com",
  databaseURL: "https://chatc-50392.firebaseio.com",
  projectId: "chatc-50392",
  storageBucket: "chatc-50392.appspot.com",
  messagingSenderId: "95806624746"
};
firebase.initializeApp(config);


export default {
  database: firebase.database()
}