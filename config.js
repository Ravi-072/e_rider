import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBQMeQnBy_GtYEV3vCzt6bk5DTphaw8Tp4",
    authDomain: "e-rider-baf99.firebaseapp.com",
    projectId: "e-rider-baf99",
    storageBucket: "e-rider-baf99.appspot.com",
    messagingSenderId: "633720444697",
    appId: "1:633720444697:web:2e21e183dcd174461a9788"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
