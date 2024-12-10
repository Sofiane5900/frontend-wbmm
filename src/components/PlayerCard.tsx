import React from "react";
import { User } from "../mockData/users";
import { ranks } from "../mockData/ranks";

// Function to dynamically get rank-specific border colors
const getRankBorder = (rank: string) => {
  switch (rank) {
    case "Iron":
      return "border-2 border-gray-700";
    case "Bronze":
      return "border-2 border-amber-500";
    case "Silver":
      return "border-2 border-slate-300";
    case "Gold":
      return "border-2 border-yellow-500";
    case "Platinum":
      return "border-2 border-blue-400";
    case "Diamond":
      return "border-2 border-purple-400";
    default:
      return "border-2 border-gray-500"; // Default for unknown or empty ranks
  }
};

interface PlayerCardProps {
  user?: User; // User data or undefined for empty slots
  className?: string; // Optional class name for external styles
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ user }) => {
  // Dynamically find the rank image based on the user's rank
  const rankImage = user
    ? ranks.find((rank) => rank.rank === user.rank)?.image
    : null;

  return (
    <div
      className={`w-44 h-72 rounded-lg shadow-lg flex flex-col transition-all duration-300 ease-in-out transform ${
        user ? getRankBorder(user.rank) : "border-gray-500"
      }`}
      style={{
        background:
          "repeating-linear-gradient(45deg, #1C1C1C, #1C1C1C 10px, #101010 10px, #101010 20px)",
      }}
    >
      <div className="flex justify-center items-center mt-4">
        {user ? (
          <img
            src={rankImage || "https://via.placeholder.com/48x48.png"}
            alt={`${user.rank} Icon`}
            className="w-16 h-16 rounded-full shadow-md"
          />
        ) : (
          <img
            src="https://i.imgur.com/VzOqcJA.png"
            alt="Empty Slot Icon"
            className="w-16 h-16"
          />
        )}
      </div>

      {user ? (
        <div className="text-center my-2 text-lg font-semibold text-white bg-gray-600 rounded-sm py-1">
          {user.username}
        </div>
      ) : (
        <div className="text-center py-2 text-lg font-semibold text-gray-400">
          Empty Slot
        </div>
      )}

      {user && (
        <div className="text-center text-sm text-white mt-2 px-2">
          <p className="text-xs">MMR: {user.MMR}</p>
          <p className="text-xs">K/D: {user.KD.toFixed(1)}</p>
          <p
            className={`text-xs ${user.MMR > 1500 ? "text-green-400" : "text-yellow-400"}`}
          >
            Status: {user.MMR > 1500 ? "Ready" : "Not Ready"}
          </p>
        </div>
      )}
    </div>
  );
};
