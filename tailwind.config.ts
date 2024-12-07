// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}', // Include pages folder
    './src/components/**/*.{js,ts,jsx,tsx}', // Include components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
