// import firebase from 'firebase';

// firebase.initializeApp({
//   apiKey: 'AIzaSyCmQGMqCv5Zm-N11KDf5V-HgRYSbos8dug',
//   authDomain: 'crud-react-native-66d7e.firebaseapp.com',
//   projectId: 'crud-react-native-66d7e',
//   storageBucket: 'crud-react-native-66d7e.appspot.com',
//   messagingSenderId: '1013126025074',
//   appId: '1:1013126025074:web:4d45f623f35f0621e317eb',
// });

// const FIREBASE = firebase;

// export default FIREBASE;

// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database'; // Gunakan API modular untuk database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCmQGMqCv5Zm-N11KDf5V-HgRYSbos8dug',
  authDomain: 'crud-react-native-66d7e.firebaseapp.com',
  projectId: 'crud-react-native-66d7e',
  storageBucket: 'crud-react-native-66d7e.appspot.com',
  messagingSenderId: '1013126025074',
  appId: '1:1013126025074:web:4d45f623f35f0621e317eb',
  databaseURL:
    'https://crud-react-native-66d7e-default-rtdb.asia-southeast1.firebasedatabase.app', // Tambahkan URL database
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database};
