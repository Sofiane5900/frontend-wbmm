import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, user } = useAuth();
  const router = useRouter();

  // If already logged in, redirect to the home page
  useEffect(() => {
    if (user) {
      router.push("/"); // Redirect to home if already logged in
    }
  }, [user, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const loggedIn = login(username, password);

    if (!loggedIn) {
      setError("Invalid username or password");
    } else {
      router.push("/"); // Redirect to home page after successful login
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          id="password"
          name="password"
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
