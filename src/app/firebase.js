// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBp3FmjOibZnAUUtLL_RCWj9WW0M--JHxQ',
  authDomain: 'am-here-4b966.firebaseapp.com',
  projectId: 'am-here-4b966',
  storageBucket: 'am-here-4b966.appspot.com',
  messagingSenderId: '819634050154',
  appId: '1:819634050154:web:16e9a1936b332ebf73a613',
  measurementId: 'G-TQP5QNW6MS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
