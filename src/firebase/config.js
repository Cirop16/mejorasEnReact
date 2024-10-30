import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfAyEZoWO-jQq9VDyljk4BqyXDFmN7E8M",
  authDomain: "ecommerce-react-614d5.firebaseapp.com",
  projectId: "ecommerce-react-614d5",
  storageBucket: "ecommerce-react-614d5.appspot.com",
  messagingSenderId: "146105755590",
  appId: "1:146105755590:web:55c199868932686f31f4c7",
  measurementId: "G-74WH0M1DMC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);