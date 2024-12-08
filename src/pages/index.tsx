import { Navbar } from "@/components/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from "./../mockData/users";
import Image from "next/image";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { WelcomeHeader } from "@/components/WelcomeHeader";
import { ProfileCard } from "@/components/ProfileCard";
import { TournamentCard } from "@/components/TournamentCard";
import { AboutCard } from "@/components/AboutCard";
import { RanksCard } from "@/components/RanksCard";

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const loggedInUser = localStorage.getItem("loggedInUser");
  const user = localStorage.getItem("loggedInUser")
    ? JSON.parse(localStorage.getItem("loggedInUser")!)
    : null;

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      router.push("/auth/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-yellow-400">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen text-yellow-400">
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-start w-full px-4 py-8">
          <WelcomeHeader />
          <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
            <ProfileCard />
            <AboutCard />
          </div>
          <TournamentCard />
          <RanksCard />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
