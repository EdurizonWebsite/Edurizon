// components/ThemeToggle.tsx
import ThemeContext from "@/context/themeContext";
import { useContext } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="p-2 bg-white dark:bg-gray-800 rounded-full">
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
