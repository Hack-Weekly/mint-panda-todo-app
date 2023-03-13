// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, deleteDoc, updateDoc, collection, doc } from "firebase/firestore";
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

export const dbAddTask = async (task) => {
  await addDoc(collection(db, 'todos'), task)
}

export const dbRemoveTask = async (id) => {
  console.log(id)
  await deleteDoc(doc(db, 'todos', id))
}

export const dbCompleteTask = async (id) => {
  await updateDoc(doc(db, 'todos', id), {
    isCompleted: true,
  });
}