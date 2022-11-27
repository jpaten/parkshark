import firebase from 'firebase/app';


const config = {
  apiKey: "AIzaSyAmtArJokNOa_teGTO7WTV9a4Swcu6Oj5g",
  authDomain: "insta - chef - ba8dc.firebaseapp.com",
  projectId: "insta - chef - ba8dc",
  databaseURL: "https://insta-chef-ba8dc-default-rtdb.firebaseio.com/",
  storageBucket: "insta - chef - ba8dc.appspot.com",
  messagingSenderId: "969126881676",
  appId: "1: 969126881676: web: 33a9b90818260362118ea9"
};
const firebaseConfig = {
  apiKey: "AIzaSyB9dQKun4vD5T3MybT2UmIgwfs_KgkEK5k",
  authDomain: "parkshark-c598f.firebaseapp.com",
  projectId: "parkshark-c598f",
  storageBucket: "parkshark-c598f.appspot.com",
  messagingSenderId: "308635705370",
  appId: "1:308635705370:web:35d3a676e68fbf5034b1a3",
  measurementId: "G-VN4GNZN90X"
};


const fire = firebase.initializeApp(firebaseConfig);

export default fire;