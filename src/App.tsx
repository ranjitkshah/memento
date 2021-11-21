import React from 'react';
import './App.css';
import { db } from './services/firebaseConfig';
import {set,ref} from 'firebase/database'; 

function App() {
  set(ref(db, 'users/'),{
    username:'hey',
    email:'just right '
  })
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
    </div>
  );
}

export default App;
