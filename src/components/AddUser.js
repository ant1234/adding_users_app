import React, {useState} from "react";
import './AddUser.css';
import './Button.css';
import Wrapper from "./Helper/Wrapper";

const AddUser = props => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const usernameHandler = event => {
        setUsername(event.target.value);
    };

    const ageHandler = event => {
        setAge(event.target.value);
    };

    const addUserHandler = event => {

        event.preventDefault();

        const userData = {
            'username': username,
            'age': age,
        };

        props.onSubmitUserData(userData);
    };

    return (
        <Wrapper>
            <div className="input">
                <form onSubmit={addUserHandler}>
                    <label>Username</label>
                    <input type="text" value={username} onChange={usernameHandler}/>
                    <label>Age (Years)</label>
                    <input type="text" value={age} onChange={ageHandler}/>
                    <button className="button" type="submit">Add User</button>
                </form>
            </div>
        </Wrapper>
    );
};

export default AddUser;