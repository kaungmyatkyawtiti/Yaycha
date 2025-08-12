import { createContext } from 'react';

type ThemeContextType = {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
};

const ThemedContext = createContext<ThemeContextType>({
  mode: "dark",
  setMode: () => { }, // still a placeholder, but now typed correctly
});

export default ThemedContext;
