import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDZmP5g4U0xXwSXa1oG8AXUCr-FDx6ADg4",
  authDomain: "development-dietapp.firebaseapp.com",
  projectId: "development-dietapp",
  storageBucket: "development-dietapp.firebasestorage.app",
  messagingSenderId: "976546877177",
  appId: "1:976546877177:android:696c9131a08d2e90579c28"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
