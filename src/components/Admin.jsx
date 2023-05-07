// import React from "react";

const Admin = () => {
  const handleUsers = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const designation = e.target.designation.value;
    const address = e.target.address.value;
    const user = { name, email, designation, address };
    fetch(`https://users-management-server.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("User create successful");
          e.target.reset();
        }
      });
  };

  return (
    <div className="max-w-md mx-auto backdrop-blur-md bg-green-800 text-black h-[calc(100vh-200px)] mt-10 flex items-center justify-center">
      <form
        className="flex flex-col placeholder:text-black  gap-5"
        onSubmit={handleUsers}
      >
        <p className="text-white font-bold text-center text-3xl">Welcome</p>
        <input
          className="text-xl font-bold py-1 px-2 placeholder:text-slate-500 placeholder:ps-2 rounded-md"
          type="text"
          name="name"
          required
          placeholder="name"
        />
        <input
          className="text-xl font-bold py-1 px-2 placeholder:text-slate-500 placeholder:ps-2 rounded-md"
          type="email"
          name="email"
          required
          placeholder="email"
        />
        <input
          className="text-xl font-bold py-1 px-2 placeholder:text-slate-500 placeholder:ps-2 rounded-md"
          type="text"
          name="designation"
          required
          placeholder="designation"
        />
        <input
          className="text-xl font-bold py-1 px-2 placeholder:text-slate-500 placeholder:ps-2 rounded-md"
          type="text"
          name="address"
          required
          placeholder="address"
        />
        <input
          type="submit"
          className="bg-red-900 text-xl font-bold py-2 px-3 text-white"
          value="Create New Member"
        />
      </form>
    </div>
  );
};

export default Admin;
