import React, { useState } from "react";
import { PlayerCard } from "@/components/PlayerCard";
import { mockUsers, User } from "@/mockData/users";
import { Footer } from "@/components/Footer";

const Play = () => {
  const [isMatchStarted, setIsMatchStarted] = useState(false); // Track if the match has started
  const [team1, setTeam1] = useState<User[]>([]); // Team 1 users
  const [team2, setTeam2] = useState<User[]>([]); // Team 2 users
  const [map, setMap] = useState("");
  const [server, setServer] = useState("");

  const launchMatch = () => {
    const shuffledPlayers = [...mockUsers].sort(() => 0.5 - Math.random());
    const middleIndex = Math.floor(shuffledPlayers.length / 2);

    setTeam1(shuffledPlayers.slice(0, middleIndex));
    setTeam2(shuffledPlayers.slice(middleIndex));

    const maps = ["Verloren", "Sandiboush", "Mountain Fortress"];
    const servers = ["WBMM_EU_1", "WBMM_EU_2", "WBMM_EU_3"];
    setMap(maps[Math.floor(Math.random() * maps.length)]);
    setServer(servers[Math.floor(Math.random() * servers.length)]);

    setIsMatchStarted(true);
  };

  return (
    <div className="h-full w-full  text-white">
      {!isMatchStarted ? (
        <div className="queue-screen flex flex-col items-center  to-black p-10 min-h-screen">
          <h1 className="text-5xl font-extrabold mb-10 text-gray-100">
            Queue Lobby <span className="text-green-400">(12 Players)</span>
          </h1>

          <div className="grid grid-cols-6 gap-6 mb-12 max-w-6xl">
            {Array(12)
              .fill(null)
              .map((_, index) => (
                <PlayerCard key={index} user={mockUsers[index] || undefined} />
              ))}
          </div>

          <button
            onClick={launchMatch}
            className="px-16 py-5 bg-green-600 text-2xl  w-full shadow-lg hover:bg-green-700 hover:scale-105  transition-transform duration-200"
          >
            Launch Match
          </button>
        </div>
      ) : (
        <div className="match-screen p-8">
          <div className="bg-gradient-to-r from-green-500 via-blue-600 to-purple-500 p-6 rounded-lg shadow-lg text-center mb-8">
            <h1 className="text-4xl font-extrabold">{server}</h1>
            <h2>{map}</h2>
            <p className="text-sm font-medium opacity-75">
              Map randomized | Players assigned
            </p>
          </div>

          <div className="flex justify-between gap-8">
            <div
              className="flex-1  p-6 rounded-lg shadow-lg"
              style={{ background: "#161616" }}
            >
              <h2 className="text-green-400 text-2xl font-bold mb-4">Team 1</h2>
              <div className="grid grid-cols-3 gap-4">
                {team1.map((player) => (
                  <PlayerCard
                    key={player.username}
                    user={player}
                    className="border border-green-400 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  />
                ))}
              </div>
            </div>

            <div
              className="flex-1 p-6 rounded-lg shadow-lg"
              style={{ background: "#161616" }}
            >
              <h2 className="text-red-400 text-2xl font-bold mb-4">Team 2</h2>
              <div className="grid grid-cols-3 gap-4">
                {team2.map((player) => (
                  <PlayerCard
                    key={player.username}
                    user={player}
                    className="border border-red-400 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Play;
