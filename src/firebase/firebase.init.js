// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.apiKey,
  authDomain: import.meta.env.authDomain,
  projectId: import.meta.env.projectId,
  storageBucket: import.meta.env.storageBucket,
  messagingSenderId:import.meta.env.messagingSenderId,
  appId: import.meta.env.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("✅ Firebase initialized:", app.name ? "Yes" : "No");
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);