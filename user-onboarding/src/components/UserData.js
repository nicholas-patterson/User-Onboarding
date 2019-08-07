import React from "react";
import "../../src/UserForm.css";

const UserData = ({ userData }) => {
  console.log("User Data In Table Component", userData);
  return userData.map(data => {
    return (
      <div>
        <h3>Name: {data.name}</h3>
        <h3>Email: {data.email}</h3>
        <h3>Password: {data.password}</h3>
      </div>
    );
  });
};

export default UserData;
