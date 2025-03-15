// components/ThemeToggle.tsx
import ThemeContext from "@/context/themeContext";
import Image from "next/image";
import DarkTheme from '../public/assets/Images/Icons/DarkTheme.svg'
import LightTheme from '../public/assets/Images/Icons/LightTheme.svg'
import { useContext } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="w-[2.5vw] h-[2.5vw] z-50 bg-white dark:bg-transparent rounded-full ">
      {theme === "light" ? <Image className="p-1 w-[2.5vw] h-[2.5vw] border border-solid border-black border-1 rounded-full" alt="darkTheme" src={DarkTheme}/> : <Image className="p-1 w-[2.5vw] h-[2.5vw] border border-solid border-white border-1 rounded-full" alt="darkTheme" src={LightTheme}/>}
    </button>
  );
}