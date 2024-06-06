import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu3A4rY2xAwYpne4QZgYUI8Rd2GpCDRBQ",
  authDomain: "biccas-signin.firebaseapp.com",
  projectId: "biccas-signin",
  storageBucket: "biccas-signin.appspot.com",
  messagingSenderId: "15167569892",
  appId: "1:15167569892:web:c33d9f84d57b5f0f4f51f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;