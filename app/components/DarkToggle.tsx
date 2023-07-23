"use client";
import { useEffect, useState } from "react";

export default function DarkToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const theme = localStorage.getItem("theme");
    if (theme) {
      setIsDarkMode(theme === "dark");
      root.classList.add(theme);
    } else {
      setIsDarkMode(
        window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
      );
      root.classList.add(
        window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }
  }, []);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      setIsDarkMode(false);
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkMode(true);
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div>
      <button
        className="mr-2 transition-transform duration-300 ease-in-out bg-slate-700 dark: rounded-full w-12 h-6 flex items-center justify-between p-1"
        onClick={toggleDarkMode}
      >
        <div
          className={`bg-white dark:bg-yellow-300 rounded-full w-4 h-4 transform transition-transform duration-300 ease-in-out ${
            isDarkMode ? "translate-x-6" : ""
          }`}
        />
      </button>
    </div>
  );
}
