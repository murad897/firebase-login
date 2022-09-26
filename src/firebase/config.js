import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_DOMAIN,
  projectId: process.env.REACT_APP_API_PROJECTID,
  storageBucket: process.env.REACT_APP_API_BUCKET,
  messagingSenderId: process.env.REACT_APP_API_MESSAGE_ID,
  appId: process.env.REACT_APP_API_MESSAGE_APPID,
};

firebase.initializeApp(firebaseConfig);

const projectFileStore = firebase.firestore();
const projectAuth = firebase.auth();
const timeStamp = firebase.firestore.Timestamp;

export { projectAuth, projectFileStore, timeStamp };
