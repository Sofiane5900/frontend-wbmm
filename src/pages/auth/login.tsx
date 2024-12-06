// src/pages/auth/login.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import { mockUsers, User } from "../../mockData/users";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the username exists in the mock data
    const user = mockUsers.find((user: User) => user.username === username);

    if (!user) {
      setError("User not found.");
      return;
    }

    // Check if the password matches
    if (user.password !== password) {
      setError("Incorrect password.");
      return;
    }

    // If login is successful, clear error and redirect to a new page (for now, we'll just log the success)
    console.log("Logged in:", user);
    setError(""); // Clear error if successful
    // Redirect to home or dashboard after successful login
    router.push("/home"); // You can change this route as needed
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
