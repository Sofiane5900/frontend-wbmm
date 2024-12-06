// src/pages/auth/login.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import { mockUsers } from "../../mockData/users";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = mockUsers.find((user) => user.username === username && user.password === password);

    if (user) {
      // We set the user in localStorage for simulating a logged user 
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      // Redirect to home page
      router.push("/home");
    } else {
      setError("Invalid username or password.");
    }
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
