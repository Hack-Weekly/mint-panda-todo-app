// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, onSnapshot } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBirDlPZ_AGO-1OmSds7XOZz_-0jvULncU",
  authDomain: "mint-panda-todo-list.firebaseapp.com",
  databaseURL: "https://mint-panda-todo-list-default-rtdb.firebaseio.com",
  projectId: "mint-panda-todo-list",
  storageBucket: "mint-panda-todo-list.appspot.com",
  messagingSenderId: "380220336299",
  appId: "1:380220336299:web:a19ed876d83dbf0b9e6fee"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
/*
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
*/