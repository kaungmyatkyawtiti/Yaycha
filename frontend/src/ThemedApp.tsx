import { useState } from 'react';
import App from './App';
import ThemedContext from './ThemedContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function ThemedApp() {
  const [mode, setMode] = useState("dark");

  const handleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  return (
    <ThemedContext.Provider value={{ mode }}>
      <div
        style={{
          background: mode === "dark" ? "black" : "white",
          color: mode === "dark" ? "white" : "black",
          minHeight: "100vh",
        }}
      >
        <button
          onClick={handleMode}
          style={{
            margin: 8,
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "none",
            background: mode === "dark" ? "#121212" : "#f5f5f5", // soft black / light gray
            color: mode === "dark" ? "white" : "black",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon
            icon={mode === "dark" ? faSun : faMoon}
            size="lg"
          />
        </button>
        <App />
      </div>
    </ThemedContext.Provider >
  )
}
