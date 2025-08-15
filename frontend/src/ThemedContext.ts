import { createContext } from 'react';

const ThemedContext = createContext({
  mode: "dark",
});

export default ThemedContext;
