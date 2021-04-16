import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyA5W2dqzUF-ah957mqm3dOSsTX_MpkhjMw",
  authDomain: "user-board-32a3d.firebaseapp.com",
  projectId: "user-board-32a3d",
  storageBucket: "user-board-32a3d.appspot.com",
  messagingSenderId: "1022346387341",
  appId: "1:1022346387341:web:db474d0d21b5c4cea8e7c4",
  measurementId: "G-HXQ3HWN1QF"
};

// initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;