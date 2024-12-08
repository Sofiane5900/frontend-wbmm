import React from "react";
import { useRouter } from "next/router";

export const Sidebar = () => {
  const router = useRouter();
  return (
    <div>
      <div
        className="bg-gray-900 text-white w-64 min-h-screen p-6"
        style={{ background: "#161616" }}
      >
        <h1 className="text-lg font-bold mb-6 uppercase text-center">Menu</h1>
        <nav className="space-y-4">
          <button
            className={`flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-gray-800 ${
              router.pathname === "/" ? "bg-gray-800" : ""
            }`}
            onClick={() => router.push("/")}
          >
            🏠 <span>Dashboard</span>
          </button>
          <button
            className="flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={() => router.push("/play")}
          >
            🎮 <span>Play</span>
          </button>
          <button
            className="flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={() => router.push("/tournaments")}
          >
            🏆 <span>Tournaments</span>
          </button>
          <button
            className="flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={() => router.push("/hubs")}
          >
            🌐 <span>Hubs</span>
          </button>
          <button
            className="flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={() => router.push("/teams")}
          >
            🤝 <span>Teams</span>
          </button>
          <button
            className="flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={() => router.push("/profile")}
          >
            👤 <span>Profile</span>
          </button>
        </nav>
      </div>
    </div>
  );
};
