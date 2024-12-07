import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in by looking in localStorage
    const storedUser = localStorage.getItem("loggedInUser");
    
    if (!storedUser) {
      // If no user is found, redirect to login
      router.push("/auth/login");
    } else {
      // If a user is found, parse the stored user data
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  if (!user) {
    return <div>Loading...</div>; // Display loading until user data is fetched
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-details">
        <img src={user.profilePicture} alt="Profile Picture" width={150} height={150} />
        <h2>{user.username}</h2>
        <p>Rank: {user.rank}</p>
        <p>MMR: {user.MMR}</p>
        <p>Matches Played: {user.matchesPlayed}</p>
        <p>Wins: {user.wins}</p>
        <p>Losses: {user.losses}</p>
        <p>K/D: {user.KD}</p>
      </div>
    </div>
  );
};

export default Profile;
