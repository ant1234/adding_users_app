import React from 'react';

const UsersList = (props) => {
  return (
   
      <ul>
        {props.userData.map((user) => (
          <li>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
 
  );
};

export default UsersList;
