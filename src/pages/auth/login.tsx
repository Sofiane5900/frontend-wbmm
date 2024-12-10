import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";
import { FaDiscord } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const loggedIn = login(username, password);

    if (!loggedIn) {
      setError("Invalid username or password");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white fade-in">
      <div className="mb-6">
        <h1 className="text-5xl text-yellow-400 text-center mt-4">
          Warlords Matchmaking
        </h1>
        <p className="text-center text-yellow-200 mt-2 text-lg">
          A matchmaking service for Warlords.
        </p>
      </div>

      <div
        className="w-full max-w-md p-8 rounded-lg border-2 border-yellow-400 shadow-lg"
        style={{ backgroundColor: "#161616" }}
      >
        {error && (
          <p className="text-center text-red-500 text-lg mb-4">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="block text-lg font-medium text-white"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 text-white rounded-lg border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              style={{ backgroundColor: "#303030" }}
              required={true}
            />
          </div>
          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-white"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-white  rounded-lg border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              style={{ backgroundColor: "#303030" }}
              required={true}
            />
          </div>
          {/* Submit  */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-yellow-400 hover:bg-yellow-500 
                       text-gray-800 font-bold rounded-lg shadow-lg
                       focus:outline-none focus:ring-2 focus:ring-yellow-400 
                       focus:ring-offset-2 focus:ring-offset-gray-800
                       transition duration-200 text-sm uppercase tracking-wider"
          >
            Log In
          </button>
        </form>
        {/* Fake Register :D  */}
        <p className="text-center text-sm mt-6">
          Don&apos;t miss the action !{" "}
          <a
            href="/auth/register"
            className="text-yellow-400 hover:text-yellow-300 underline 
                     transition duration-200"
          >
            Register Here
          </a>
        </p>
      </div>

      {/* Discord */}
      <div className="mt-8 text-center">
        <a
          href="https://discord.gg/W7r8DkdqxQ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-yellow-400 
                     hover:text-yellow-300 transition duration-200 gap-2"
        >
          <FaDiscord className="text-2xl mr-2" /> Join the Discord!
        </a>
      </div>
    </div>
  );
};

export default Login;
