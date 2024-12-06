export interface User {
  username: string;
  password: string;
  profilePicture: string;
  matchesPlayed: number;
  wins: number;
  losses: number;
  KD: number;
  MMR: number;
  rank: string;
}

export const mockUsers: User[] = [
  {
    username: "Player123",
    password: "123", // we won't do this in the real app :'D
    profilePicture: "https://example.com/images/player123.jpg",
    matchesPlayed: 50,
    wins: 30,
    losses: 20,
    MMR: 1500,
    KD: 1.5,
    rank: "Gold",
  },
  {
    username: "Player456",
    password: "456",
    profilePicture: "https://example.com/images/player456.jpg",
    matchesPlayed: 30,
    wins: 20,
    losses: 10,
    MMR: 1400,
    KD: 2.0,
    rank: "Silver",
  },
];
