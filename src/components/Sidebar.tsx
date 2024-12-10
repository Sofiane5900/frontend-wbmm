import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaGamepad,
  FaTrophy,
  FaGlobe,
  FaUsers,
  FaUser,
} from "react-icons/fa";

export const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const loggedInUser = localStorage.getItem("loggedInUser");
  const user = localStorage.getItem("loggedInUser")
    ? JSON.parse(localStorage.getItem("loggedInUser")!)
    : null;
  const navItems = [
    { label: "Dashboard", icon: <FaHome />, path: "/" },
    { label: "Play", icon: <FaGamepad />, path: "/play" },
    { label: "Tournaments", icon: <FaTrophy />, path: "/tournaments" },
    { label: "Hubs", icon: <FaGlobe />, path: "/hubs" },
    { label: "Teams", icon: <FaUsers />, path: "/teams" },
    { label: "Profile", icon: <FaUser />, path: "/profile" },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        className="text-white text-2xl fixed top-4 left-4 z-20 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full  text-white w-64 transform transition-transform duration-300 z-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:shadow-lg`}
        style={{ background: "#161616" }}
      >
        <div className="p-6">
          {/* Sidebar Header */}
          <div>
            <h1 className="text-xl font-extrabold text-yellow-400 uppercase text-center mb-4">
              {user?.username}
            </h1>

            {/* Connection Status */}
            {loggedInUser && (
              <p className="text-center text-green-500 font-semibold">
                🟢 Connected
              </p>
            )}
          </div>

          {/* Navigation */}
          <nav className="space-y-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                className={`flex items-center space-x-4 w-full px-4 py-3 text-left rounded-lg transition-all duration-300 ${
                  router.pathname === item.path
                    ? "bg-yellow-500 text-gray-900 shadow-md"
                    : " hover:bg-yellow-500 hover:text-gray-900 hover:shadow-lg"
                }`}
                onClick={() => {
                  setIsOpen(false); // Close sidebar on mobile when clicking
                  router.push(item.path);
                }}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};
