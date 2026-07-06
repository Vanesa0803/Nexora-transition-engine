import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKn6w-Vhze4tU-GZSCxtjbyE1Cz5iVeTg",
  authDomain: "transition-engine.firebaseapp.com",
  projectId: "transition-engine",
  storageBucket: "transition-engine.firebasestorage.app",
  messagingSenderId: "356499293787",
  appId: "1:356499293787:web:ec379ffc6077f5545be17e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();