// import React from "react";

import { useLoaderData } from "react-router-dom";
import User from "./User";
import { useState } from "react";

const Users = () => {
  const allUsers = useLoaderData();

  const [users, setUsers] = useState(allUsers);
  console.log(users);

  const handleDeleteUser = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Delete user Successful");
          const remaining = users.filter((user) => user._id != _id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div className="flex justify-center flex-col items-center gap-5">
      <h1 className="text-3xl mt-5">All users List</h1>
      <p>Total users: {users?.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {users?.map((user) => (
          <User
            key={user._id}
            user={user}
            handleDeleteUser={handleDeleteUser}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
