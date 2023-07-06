import React, {useState} from "react";

const UsersList = props => {
    return (
        <input value={props.username + ' ' + props.age}/>
    );
};

export default UsersList;