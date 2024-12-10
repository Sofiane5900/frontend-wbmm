import React from "react";
import { User } from "../mockData/users";
import { useEffect, useState } from "react";

export const WelcomeHeader = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div
      className="w-full max-w-5xl mb-8 px-4 py-3 border-t border-yellow-400"
      style={{ background: "#161616" }}
    >
      {/* Header Content */}
      <div className="flex items-center justify-between">
        {/* Welcome Text */}
        <h2 className="text-2xl font-bold text-yellow-400">
          Welcome, {user?.username}!
        </h2>

        {/* Online Stats */}
        <div className="flex flex-col items-end text-sm font-semibold text-green-400">
          <p className="uppercase">32 Online Users</p>
          <p className="text-white">
            <span>Battles:</span> <span className="text-green-400">0</span>
          </p>
          <p className="text-white">
            <span>Groupfights:</span> <span className="text-green-400">0</span>
          </p>
        </div>
      </div>
    </div>
  );
};
