import React from "react";

export const TournamentCard = () => {
  return (
    <div className="w-full max-w-5xl mt-8">
      <h2 className="text-lg font-bold text-yellow-400 mb-2 uppercase">
        Latest Tournament
      </h2>
      <div
        className="border border-yellow-400 p-4 rounded-md shadow-md flex flex-col items-center"
        style={{ background: "#161616" }}
      >
        <img
          src="https://i.imgur.com/eCD2izo.png"
          alt="Tournament Banner"
          className="w-full rounded-md mb-4"
        />
        <p className="text-gray-300 text-sm text-center">
          Don&apos;t miss the action! Join the{" "}
          <span className="text-yellow-400 font-bold">
            Warlords Groupfighting League
          </span>{" "}
          and test your skills against the best players in the community.
        </p>
      </div>
    </div>
  );
};
