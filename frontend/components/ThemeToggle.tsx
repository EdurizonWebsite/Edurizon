// components/ThemeToggle.tsx
import ThemeContext from "@/context/themeContext";
import { useContext } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="w-[10vw] md:w-[2.5vw] h-[10vw]  md:h-[2.5vw] z-[20] bg-white dark:bg-transparent rounded-full 
      transition-all duration-500 ease-in-out"
    >
      {theme === "light" ? (
        <img
          className="p-1 w-full h-full border border-solid border-black border-1 rounded-full 
          transition-all duration-500 ease-in-out"
          alt="darkTheme"
          src="/assets/Images/Icons/DarkTheme.svg"
        />
      ) : (
        <img
          className="p-1 w-full h-full border border-solid border-white border-1 rounded-full 
          transition-all duration-500 ease-in-out"
          alt="lightTheme"
          src="/assets/Images/Icons/LightTheme.svg"
        />
      )}
    </button>
  );
}