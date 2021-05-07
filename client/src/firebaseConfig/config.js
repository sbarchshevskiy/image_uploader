import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAJw7txItQiwsPA4KsVg7-SpYH-2efrLo",
  authDomain: "small-image-repo.firebaseapp.com",
  projectId: "small-image-repo",
  databaseURL: "https://small-image-repo-default-rtdb.firebaseio.com",
  storageBucket: "small-image-repo.appspot.com",
  messagingSenderId: "588127984440",
  appId: "1:588127984440:web:f0742426d432e3fa13ffcd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const backendStorage = firebase.storage();
const backendFirestore = firebase.firestore();

export default firebase;
export {backendFirestore, backendStorage};