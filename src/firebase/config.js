import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBAe2FiY3DdH-eyjGbnXg6PP0hnXwgLoEw",
  authDomain: "reactcicchini.firebaseapp.com",
  projectId: "reactcicchini",
  storageBucket: "reactcicchini.appspot.com",
  messagingSenderId: "618302620363",
  appId: "1:618302620363:web:cf38829c84d4fe75c7d14e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initializeFirebase = () => app