import React, { useState, useEffect } from "react";

interface userInformation {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export default function Signup() {
  const [inputs, setInputs] = useState<userInformation>({});

  const existingUsers: userInformation = {
    firstName: "john",
    lastName: "doe",
    email: "user@gmail.com",
    password: "idk123",
  };

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(inputs);

    const inputFirstName = inputs.firstName;
    const inputLastName = inputs.lastName;
    const inputEmail = inputs.email;
    const inputPassword = inputs.password;

    const firstNameInDatabase =
      Object.values(existingUsers).includes(inputFirstName);
    const lastNameInDatabase =
      Object.values(existingUsers).includes(inputLastName);
    const emailInDatabase = Object.values(existingUsers).includes(inputEmail);
    const passwordInDatabase =
      Object.values(existingUsers).includes(inputPassword);

    // if both exist, then redirect them to the home page
    if (emailInDatabase) {
      console.log("already exists");
    } else {
      console.log("User doesn't exist. Create new user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <nav className="main">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="stores">Stores</a>
            </li>
            <li>
              <a href="upload">Upload Music</a>
            </li>
            <li>
              <a href="login">Login</a>
            </li>
            <li>
              <a href="signup">Signup</a>
            </li>
          </ul>
        </nav>
        <h1 className="text-2xl font-semibold mb-4"></h1>
        <div>
          <div>
            <h2 className="text-xl mb-4">Signup</h2>

            <div>
              <form onSubmit={handleSubmit}>
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    value={inputs.firstName || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    value={inputs.lastName || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Email
                  <input
                    type="text"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Password
                  <input
                    type="text"
                    name="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                  />
                </label>
                <br />
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
