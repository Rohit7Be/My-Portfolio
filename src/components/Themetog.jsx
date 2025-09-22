import React from 'react'
import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useEffect } from 'react'
import { cn } from '../lib/utils'

const Themetog = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <button
      onClick={toggleTheme} className={cn(
        "fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300",
        "hover:bg-gray-300 dark:hover:bg-gray-700 ")}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-white" />
      )}
    </button>
  )
}

export default Themetog
