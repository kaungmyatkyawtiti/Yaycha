const logEnabled = import.meta.env.VITE_LOG_ENABLED === "true";

type logFn = (...args: unknown[]) => void;

export const log: logFn = (...args) => {
  if (logEnabled) {
    console.log("logging", ...args);
  }
}

export const logErr: logFn = (...args) => {
  if (logEnabled) {
    console.error("error logging", ...args);
  }
}
