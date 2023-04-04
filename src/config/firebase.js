
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA5EXt6E2FeEp8P55OzXSKWldMMLna9OjU",
  authDomain: "tiktok---jornada-f30fd.firebaseapp.com",
  projectId: "tiktok---jornada-f30fd",
  storageBucket: "tiktok---jornada-f30fd.appspot.com",
  messagingSenderId: "506277298150",
  appId: "1:506277298150:web:8e2580256687c518a5e027"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;