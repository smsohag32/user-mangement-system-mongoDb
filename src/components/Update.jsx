// import React from "react";

import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  //   console.log(loadedUser);
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const designation = e.target.designation.value;
    const address = e.target.address.value;
    const updateUser = { name, email, designation, address };
    fetch(
      `https://users-management-server.vercel.app/users/${loadedUser._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateUser),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User update done");
        }
      });
  };
  return (
    <div>
      <div className="pt-10">
        <h3 className="text-center text-2xl">Update user information of</h3>
        <p className="text-center italic">{loadedUser.name}</p>
      </div>
      <form
        className="flex flex-col mt-8 max-w-md mx-auto placeholder:text-black  gap-5"
        onSubmit={handleUpdate}
      >
        <input
          className="text-xl font-bold py-1 px-2 placeholder:text-slate-900 text-slate-700 placeholder:ps-2 rounded-md"
          type="text"
          name="name"
          defaultValue={loadedUser?.name}
          required
          placeholder="name"
        />
        <input
          className="text-xl font-bold py-1 px-2 placeholder:text-slate-900 text-slate-700 placeholder:ps-2 rounded-md"
          type="email"
          name="email"
          defaultValue={loadedUser?.email}
          required
          placeholder="email"
        />
        <input
          className="text-xl font-bold py-1 px-2 placeholder:text-slate-900 text-slate-700 placeholder:ps-2 rounded-md"
          type="text"
          name="designation"
          defaultValue={loadedUser?.designation}
          required
          placeholder="designation"
        />
        <input
          className="text-xl font-bold py-1 px-2 placeholder:text-slate-900 text-slate-700 placeholder:ps-2 rounded-md"
          type="text"
          name="address"
          defaultValue={loadedUser?.address}
          required
          placeholder="address"
        />
        <input
          type="submit"
          className="bg-red-900 text-xl font-bold py-2 px-3 text-white"
          value="update"
        />
      </form>
    </div>
  );
};

export default Update;
