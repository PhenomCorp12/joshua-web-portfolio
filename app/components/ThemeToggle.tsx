"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full transition-colors duration-300 ${
        theme === "light"
          ? "text-gray-800 hover:bg-gray-100"
          : "text-gray-300 hover:bg-gray-800"
      }`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Sun
        size={20}
        className={`absolute inset-0 m-auto transition-all duration-500 ${
          theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
        }`}
      />
      <Moon
        size={20}
        className={`transition-all duration-500 ${
          theme === "light" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
        }`}
      />
    </button>
  );
}
