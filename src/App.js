import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import React,{useState} from 'react';
import Card from './components/Card';

function App() {

  const [userDataSub, setUserDataSub] = useState([{'username': '', 'age': ''}]);

  const addUserHandler = userData => {
    setUserDataSub((prevData) => {
      return [...prevData, {'username': userData.username, 'age': userData.age }];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <Card>
         <AddUser onSubmitUserData={addUserHandler} />
        </Card>
        <Card>
          <UsersList userData={userDataSub}/>
        </Card>
      </div>
    </div>
  );
}

export default App;
