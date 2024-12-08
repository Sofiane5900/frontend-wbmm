import { Navbar } from "@/components/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from "./../mockData/users";
import Image from "next/image";
import { Sidebar } from "@/components/Sidebar";

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      router.push("/auth/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-yellow-400">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex text-yellow-400 fade-in">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow px-8 py-6">
          <div className="grid grid-cols-4 gap-6">
            {/* Profile Section */}
            <div className="col-span-1">
              <h2 className="text-lg font-bold text-yellow-400 mb-2 uppercase">
                Profile
              </h2>
              <div
                className="border border-yellow-400 p-4 rounded-md shadow-md"
                style={{ background: "#161616" }}
              >
                <p className="text-white font-semibold">{user?.username}</p>
                <p className="text-gray-400 text-sm">
                  🏆 Rank: <span className="text-yellow-300">{user?.rank}</span>{" "}
                  - ⚡ MMR: <span className="text-yellow-300">{user?.MMR}</span>
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

            {/* Tournaments Section */}
            <div className="col-span-2">
              <h2 className="text-lg font-bold text-yellow-400 mb-2 uppercase">
                Tournaments
              </h2>
              <div
                className="flex flex-col items-center justify-center border border-yellow-400 p-4 rounded-md shadow-md"
                style={{ background: "#161616" }}
              >
                <Image
                  src="https://i.imgur.com/eCD2izo.png"
                  alt="Tournament"
                  width={500}
                  height={500}
                  className="mb-4"
                />
                <Image
                  src="https://i.imgur.com/7fFlWXA.png"
                  alt="Tournament"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            {/* History Section */}
            <div className="col-span-1">
              <h2 className="text-lg font-bold text-yellow-400 mb-2 uppercase">
                History
              </h2>
              <div
                className=" border border-yellow-400 p-4 rounded-md shadow-md"
                style={{ background: "#161616" }}
              >
                <h3 className="text-lg font-bold mb-2">Last Matches Played:</h3>
                <div className="space-y-4">
                  <div>
                    <img
                      src="/images/news1.jpg"
                      alt="News 1"
                      className="w-full rounded-md mb-2"
                    />
                    <p>Maps</p>
                  </div>
                  <div>
                    <img
                      src="/images/news2.jpg"
                      alt="News 2"
                      className="w-full rounded-md mb-2"
                    />
                    <p>Faction Banners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className=" text-center py-4 shadow-lg"
          style={{ background: "#161616" }}
        >
          <p className="text-sm text-white">
            Coded by Warlords Matchmaking Team @ 2024
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
