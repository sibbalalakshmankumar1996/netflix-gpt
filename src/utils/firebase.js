// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq8X2PAa8h-jJ5LlKXfzXr8BKmmwpM76I",
  authDomain: "netflix-f97e2.firebaseapp.com",
  projectId: "netflix-f97e2",
  storageBucket: "netflix-f97e2.firebasestorage.app",
  messagingSenderId: "936311450509",
  appId: "1:936311450509:web:480147960f4b5902472bc4",
  measurementId: "G-6P08CB0PQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();


