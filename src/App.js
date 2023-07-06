import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import React,{useState} from 'react';

function App() {

  let userData = {
    'username': '',
    'age':'',
  };

  const addUserHandler = userData => {
    console.log(userData.username);
    console.log(userData.age);
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <AddUser onSubmitUserData={addUserHandler} />
      <UsersList username={userData.username} age={userData.age} />
    </div>
  );
}

export default App;
