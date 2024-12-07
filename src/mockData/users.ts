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
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/144f1bb349a9be8d0a7cfe1fb0581d00f89faeff_full.jpg",
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
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/4c0500dc5458283f5d492ce45f274203d353c9c9_full.jpg",
    matchesPlayed: 30,
    wins: 20,
    losses: 10,
    MMR: 1400,
    KD: 2.0,
    rank: "Silver",
  },
  {
    username: "Player789",
    password: "789",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/7deb9d9649e64359a3ae9e56a3fcb6545b12beeb_full.jpg",
    matchesPlayed: 40,
    wins: 25,
    losses: 15,
    MMR: 1600,
    KD: 1.7,
    rank: "Platinum",
  },
  {
    username: "Player101",
    password: "101",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/94911ef404acb12bfc1f9191cf005ac861b8a3ae_full.jpg",
    matchesPlayed: 60,
    wins: 45,
    losses: 15,
    MMR: 1700,
    KD: 2.5,
    rank: "Diamond",
  },
  {
    username: "Player999",
    password: "999",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/144f1bb349a9be8d0a7cfe1fb0581d00f89faeff_full.jpg",
    matchesPlayed: 70,
    wins: 50,
    losses: 20,
    MMR: 1800,
    KD: 2.2,
    rank: "Master",
  },
];
