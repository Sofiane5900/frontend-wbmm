import React from "react";

export const RanksCard = () => {
  return (
    <div className="w-full max-w-5xl mt-8">
      <h2 className="text-lg font-bold text-yellow-400 mb-2 uppercase">
        Ranks
      </h2>
      <div
        className="grid grid-cols-6 gap-4 border border-yellow-400 p-4 rounded-md shadow-md"
        style={{ background: "#161616" }}
      >
        {/* Iron */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.imgur.com/B5r8uE1.png"
            alt="Rank 1"
            className="w-16 mb-2"
          />
          <p className="text-gray-500 text-sm">Iron</p>
        </div>

        {/* Bronze */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.imgur.com/e2uIwzw.png"
            alt="Rank 1"
            className="w-16 mb-2"
          />
          <p className="text-amber-500 text-sm">Bronze</p>
        </div>

        {/* Silver */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.imgur.com/b8pCRHq.png"
            alt="Rank 2"
            className="w-16 mb-2"
          />
          <p className="text-slate-300 text-sm">Silver</p>
        </div>

        {/* Gold */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.imgur.com/HMqIFc1.png"
            alt="Rank 3"
            className="w-16 mb-2"
          />
          <p className="text-yellow-400 text-sm">Gold</p>
        </div>

        {/* Platinum */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.imgur.com/HLawk4i.png"
            alt="Rank 4"
            className="w-16 mb-2"
          />
          <p className="text-blue-400 text-sm">Platinum</p>
        </div>

        {/* Diamond */}
        <div className="flex flex-col items-center">
          <img
            src="https://i.imgur.com/nT2ZANS.png"
            alt="Rank 4"
            className="w-16 mb-2"
          />
          <p className="text-purple-400 text-sm">Diamond</p>
        </div>
      </div>
    </div>
  );
};
