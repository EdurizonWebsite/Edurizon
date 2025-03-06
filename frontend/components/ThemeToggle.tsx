// components/ThemeToggle.tsx
import ThemeContext from "@/context/themeContext";
import { useContext } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="w-[2.5vw] h-[2.5vw] z-[20] bg-white dark:bg-transparent rounded-full 
      transition-all duration-500 ease-in-out"
    >
      {theme === "light" ? (
        <img
          className="p-1 w-[2.5vw] h-[2.5vw] border border-solid border-black border-1 rounded-full 
          transition-all duration-500 ease-in-out"
          alt="darkTheme"
          src="/assets/Images/Icons/DarkTheme.svg"
        />
      ) : (
        <img
          className="p-1 w-[2.5vw] h-[2.5vw] border border-solid border-white border-1 rounded-full 
          transition-all duration-500 ease-in-out"
          alt="lightTheme"
          src="/assets/Images/Icons/LightTheme.svg"
        />
      )}
    </button>
  );
}