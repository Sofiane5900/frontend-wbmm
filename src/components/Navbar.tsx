import React from "react";
import { useRouter } from "next/router";

export const Navbar = () => {
  function logOut() {
    localStorage.removeItem("loggedInUser");
    router.push("/auth/login");
  }

  const router = useRouter();
  return (
    <div>
      <nav
        className="flex justify-between items-center px-8 py-4  shadow-lg"
        style={{ background: "#161616" }}
      >
        <h1 className="text-3xl font-bold text-yellow-300">
          Warlords Matchmaking
        </h1>
        <nav className="flex space-x-4">
          <button
            onClick={() => router.push("/play")}
            className="hover:text-yellow-200 transition"
          >
            Play
          </button>
          <button
            onClick={() => router.push("/profile")}
            className="hover:text-yellow-200 transition"
          >
            Profile
          </button>
          <button
            onClick={() => router.push("/leaderboards")}
            className="hover:text-yellow-200 transition"
          >
            Leaderboards
          </button>
          <button
            onClick={() => router.push("/about")}
            className="hover:text-yellow-200 transition"
          >
            About
          </button>

          <button
            onClick={logOut}
            className="bg-red-600 hover:bg-red-500 text-white py-3 px-6 rounded-md shadow-md transition"
          >
            Log Out
          </button>
        </nav>
      </nav>
    </div>
  );
};
