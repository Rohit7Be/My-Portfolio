import React from 'react'
import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useEffect } from 'react'
import { cn } from '../lib/utils'

const Themetog = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    
  useEffect(() => {
    
    
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    
    
  }, []);

  return (
    <button
       className={cn(
        "hidden fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300",
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
