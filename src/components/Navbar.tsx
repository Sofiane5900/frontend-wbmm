import React from "react";
import { useRouter } from "next/router";
import {
  AiOutlinePlayCircle,
  AiOutlineUser,
  AiOutlineTrophy,
} from "react-icons/ai";
import { FaCrown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import Image from "next/image";

export const Navbar = () => {
  const router = useRouter();

  function logOut() {
    localStorage.removeItem("loggedInUser");
    router.push("/auth/login");
  }

  return (
    <div>
      <nav
        className="flex justify-between items-center px-6 py-4 shadow-lg"
        style={{ background: "#161616" }}
      >
        {/* Title Section */}
        <div
          className="flex items-baseline space-x-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <h1 className="text-yellow-400 text-2xl font-bold">
            Warband Matchmaking
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 text-white">
          <button
            onClick={() => router.push("/play")}
            className={`flex items-center space-x-2 hover:text-yellow-300 transition ${
              router.pathname === "/play" ? "text-yellow-300" : ""
            }`}
          >
            <AiOutlinePlayCircle size={20} />
            <span>Play</span>
          </button>
          <button
            onClick={() => router.push("/profile")}
            className={`flex items-center space-x-2 hover:text-yellow-300 transition ${
              router.pathname === "/profile" ? "text-yellow-300" : ""
            }`}
          >
            <AiOutlineUser size={20} />
            <span>Profile</span>
          </button>
          <button
            onClick={() => router.push("/leaderboards")}
            className={`flex items-center space-x-2 hover:text-yellow-300 transition ${
              router.pathname === "/leaderboards" ? "text-yellow-300" : ""
            }`}
          >
            <FaCrown size={20} />
            <span>Leaderboards</span>
          </button>

          <button
            onClick={logOut}
            className="flex items-center space-x-2 text-red-500 hover:text-red-400 transition"
          >
            <MdLogout size={20} />
            <span>Log Out</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
