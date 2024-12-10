import React from "react";

export const ProfileCard = () => {
  const user = localStorage.getItem("loggedInUser")
    ? JSON.parse(localStorage.getItem("loggedInUser")!)
    : null;

  return (
    <div className="col-span-1">
      <h2 className="text-lg font-bold text-yellow-400 mb-2 uppercase">
        Profile
      </h2>
      <div
        className="border border-yellow-400 p-4 rounded-md shadow-md flex flex-col justify-between"
        style={{ background: "#161616", minHeight: "200px" }}
      >
        <p className="text-white font-semibold">{user?.username}</p>
        <p className="text-gray-400 text-sm">
          🏆 Rank: <span className="text-yellow-300">{user?.rank}</span> - ⚡
          MMR: <span className="text-yellow-300">{user?.MMR}</span>
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          <li className="text-green-500 flex items-center">
            🥇 <span className="ml-2">{user?.wins} Wins</span>
          </li>
          <li className="text-red-500 flex items-center">
            💀 <span className="ml-2">{user?.losses} Losses</span>
          </li>
          <li className="text-blue-500 flex items-center">
            ⚔️ <span className="ml-2">KD Ratio: {user?.KD}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
