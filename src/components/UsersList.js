import React, {useState} from "react";

const UsersList = props => {
    // if(props.name) {
    //    return (
    //    <div className="backdrop">
    //         <div className="modal">
    //             <p>Sorry incorrect</p>
    //         </div>
    //     </div>
    //    )}
    return (
        <div className="input">
            <input value={props.username + ' ' + props.age}/>
        </div>
    );
};

export default UsersList;