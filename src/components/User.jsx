/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const User = ({ user, handleDeleteUser }) => {
  const { name, email, designation, address, _id } = user;

  return (
    <div className="text-xl text-center border-2 py-7 px-4 grid gap-2">
      <p className="">{name}</p>
      <p className="">{email}</p>
      <p className="">{designation}</p>
      <p className="">{address}</p>
      <Link to={`/update/${_id}`}>
        <button className=" w-full bg-green-800 rounded-lg">Update user</button>
      </Link>
      <button
        onClick={() => handleDeleteUser(_id)}
        className=" bg-red-600 rounded-lg"
      >
        Delete User
      </button>
    </div>
  );
};

export default User;
