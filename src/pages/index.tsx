import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);


  function logOut() {
    localStorage.removeItem("loggedInUser");
    router.push("/auth/login");
  }

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
    return <div>Loading...</div>; // We'll replace this with a loading spinner 
  }

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={logOut}>Log Out</button>
      <button onClick={() => router.push("/play")}>Play</button>
      <button onClick={() => router.push("/profile")}>Profile</button>
      <button onClick={() => router.push("/leaderboards")}>Leaderboards</button>
    </div>
  );
};

export default Home;
