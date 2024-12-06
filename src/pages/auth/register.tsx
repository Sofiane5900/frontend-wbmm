// src/pages/auth/register.tsx
import React, { useState } from "react";
import { useRouter } from "next/router"; 
import { mockUsers, User } from "../../mockData/users";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the username already exists 
    const userExists = mockUsers.some((user: User) => user.username === username);

    if (userExists) {
      setError("Username already taken.");
      return;
    }

    // We add the new user to mock data 
    const newUser: User = {
      username,
      password, 
      profilePicture: "https://example.com/images/default.jpg", 
      matchesPlayed: 0,
      wins: 0,
      losses: 0,
      rank: "Unranked", // Let's say Unranked is the default rank 
    };

    mockUsers.push(newUser); // We simulate adding an user to the DB here

    console.log("Registered:", newUser);
    setError(""); // Clear error if successful

    // Redirect to login page after successful registration
    router.push("/auth/login");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
