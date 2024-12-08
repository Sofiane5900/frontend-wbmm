import React from "react";

export const AboutCard = () => {
  return (
    <div className="col-span-2">
      <h2 className="text-lg font-bold text-yellow-400 mb-2 uppercase">
        About WBMM
      </h2>
      <div
        className="border border-yellow-400 p-4 rounded-md shadow-md flex flex-col justify-between"
        style={{ background: "#161616", minHeight: "200px" }}
      >
        <p className="text-gray-300 text-sm mb-4">
          Warband Matchmaking is a system developed to play Mount&Blade: Warband
          that resembles the format which players experience in competitive
          tournament matches. You can play solo or with your friends.
        </p>
        <ul className="list-disc list-inside text-gray-300">
          <li>
            <strong>Battle:</strong> A brutal contest in death where the last
            man standing wins.
          </li>
          <li>
            <strong>Groupfight:</strong> Improve your melee skills and teamwork!
          </li>
        </ul>
      </div>
    </div>
  );
};
