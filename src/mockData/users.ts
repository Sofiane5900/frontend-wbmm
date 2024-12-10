export interface User {
  username: string;
  password: string;
  profilePicture: string;
  matchesPlayed: number;
  wins: number;
  losses: number;
  online_users?: number;
  battles?: number;
  groupfights?: number;
  KD: number;
  MMR: number;
  rank: string;
  class?: string;
}

export const mockUsers: User[] = [
  // Infantry players
  {
    username: "Test",
    password: "123",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/144f1bb349a9be8d0a7cfe1fb0581d00f89faeff_full.jpg",
    matchesPlayed: 50,
    wins: 30,
    losses: 20,
    MMR: 1500,
    KD: 1.5,
    rank: "Iron",
    class: "Infantry",
  },
  {
    username: "Smith",
    password: "456",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/4c0500dc5458283f5d492ce45f274203d353c9c9_full.jpg",
    matchesPlayed: 30,
    wins: 20,
    losses: 10,
    MMR: 1400,
    KD: 2.0,
    rank: "Silver",
    class: "Infantry",
  },
  {
    username: "Mikhael",
    password: "789",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/7deb9d9649e64359a3ae9e56a3fcb6545b12beeb_full.jpg",
    matchesPlayed: 35,
    wins: 22,
    losses: 13,
    MMR: 1450,
    KD: 1.6,
    rank: "Gold",
    class: "Infantry",
  },
  {
    username: "Carlos",
    password: "321",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/144f1bb349a9be8d0a7cfe1fb0581d00f89faeff_full.jpg",
    matchesPlayed: 60,
    wins: 40,
    losses: 20,
    MMR: 1550,
    KD: 1.8,
    rank: "Platinum",
    class: "Infantry",
  },

  // Archer players
  {
    username: "ArcherKing",
    password: "111",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/144f1bb349a9be8d0a7cfe1fb0581d00f89faeff_full.jpg",
    matchesPlayed: 50,
    wins: 35,
    losses: 15,
    MMR: 1600,
    KD: 1.9,
    rank: "Gold",
    class: "Archer",
  },
  {
    username: "Lara",
    password: "234",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/7deb9d9649e64359a3ae9e56a3fcb6545b12beeb_full.jpg",
    matchesPlayed: 40,
    wins: 28,
    losses: 12,
    MMR: 1550,
    KD: 2.2,
    rank: "Silver",
    class: "Archer",
  },
  {
    username: "GreenArrow",
    password: "999",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/4c0500dc5458283f5d492ce45f274203d353c9c9_full.jpg",
    matchesPlayed: 45,
    wins: 32,
    losses: 13,
    MMR: 1650,
    KD: 2.0,
    rank: "Platinum",
    class: "Archer",
  },
  {
    username: "Robin",
    password: "222",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/144f1bb349a9be8d0a7cfe1fb0581d00f89faeff_full.jpg",
    matchesPlayed: 60,
    wins: 50,
    losses: 10,
    MMR: 1700,
    KD: 2.4,
    rank: "Diamond",
    class: "Archer",
  },

  // Cavalry players
  {
    username: "Horseman",
    password: "456",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/4c0500dc5458283f5d492ce45f274203d353c9c9_full.jpg",
    matchesPlayed: 45,
    wins: 30,
    losses: 15,
    MMR: 1500,
    KD: 1.8,
    rank: "Iron",
    class: "Cavalry",
  },
  {
    username: "KnightRider",
    password: "654",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/7deb9d9649e64359a3ae9e56a3fcb6545b12beeb_full.jpg",
    matchesPlayed: 50,
    wins: 40,
    losses: 10,
    MMR: 1650,
    KD: 2.1,
    rank: "Gold",
    class: "Cavalry",
  },
  {
    username: "Lancelot",
    password: "888",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/144f1bb349a9be8d0a7cfe1fb0581d00f89faeff_full.jpg",
    matchesPlayed: 55,
    wins: 40,
    losses: 15,
    MMR: 1550,
    KD: 2.0,
    rank: "Silver",
    class: "Cavalry",
  },
  {
    username: "GallantKnight",
    password: "333",
    profilePicture:
      "https://avatars.cloudflare.steamstatic.com/4c0500dc5458283f5d492ce45f274203d353c9c9_full.jpg",
    matchesPlayed: 50,
    wins: 35,
    losses: 15,
    MMR: 1600,
    KD: 2.3,
    rank: "Platinum",
    class: "Cavalry",
  },
];
