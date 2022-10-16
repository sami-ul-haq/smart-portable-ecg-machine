import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyCpbIih639Ka8eKsLoZoRZagN9gXGP63Wg",
//   authDomain: "fir-9-50150.firebaseapp.com",
//   projectId: "fir-9-50150",
//   storageBucket: "fir-9-50150.appspot.com",
//   messagingSenderId: "91811398455",
//   appId: "1:91811398455:web:1168162ed228ae642ad0b2"
// };

const firebaseConfig = {
  apiKey: "AIzaSyC9kITFniClNWQXbmpSzL9jJz5LxERJqiA",
  authDomain: "esp-firebase-demo-33943.firebaseapp.com",
  databaseURL: "https://esp-firebase-demo-33943-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp-firebase-demo-33943",
  storageBucket: "esp-firebase-demo-33943.appspot.com",
  messagingSenderId: "690115484447",
  appId: "1:690115484447:web:9457e0b98d6336b25aee2a",
  measurementId: "G-CKMLVQRLMN"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
