import { useState } from 'react';
import App from './App';
import ThemedContext from './ThemedContext';

export default function ThemedApp() {
  const [mode, setMode] = useState("dark");

  return (
    <ThemedContext.Provider value={{ mode, setMode }}>
      <App />
    </ThemedContext.Provider>
  )
}
