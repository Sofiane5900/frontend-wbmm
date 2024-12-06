import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if a user is logged in by checking localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
      // If no user is found in localStorage, redirect to login
      router.push("/auth/login");
    } else {
      // Otherwise, just show the page after loading
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading state while checking localStorage
  }

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={() => router.push("/play")}>Play</button>
      <button onClick={() => router.push("/profile")}>Profile</button>
      <button onClick={() => router.push("/leaderboards")}>Leaderboards</button>
    </div>
  );
};

export default Home;
