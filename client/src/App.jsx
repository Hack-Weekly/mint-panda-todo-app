import React, { useState } from 'react';
import TaskList from './components/TaskList';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
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
const db = getFirestore(firebase);

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

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "do something",
      isComplete: true,
      createdDate: "",
      completedDate: "",
      isArchived: false,
  },
  {
      id: 2,
      text: "do the next thing",
      isComplete: false,
      createdDate: "",
      completedDate: null,
      isArchived: false,
  },
  {
      id: 3,
      text: "do this thing then archive it",
      isComplete: true,
      createdDate: "",
      completedDate: "",
      isArchived: true,
  },
  {
      id: 4,
      text: "do the last thing",
      isComplete: false,
      createdDate: "",
      completedDate: null,
      isArchived: false,
  },
  ])

  return (
    <>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App;
