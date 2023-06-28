import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(theme === "dark");

  useEffect(() => {
    setChecked(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    toggleTheme();
    setChecked(prevChecked => !prevChecked);
  };

  return (
    <div className="switcher">
      <input type="checkbox" id="toggleSwitch" checked={checked} onChange={handleToggle} />
      <label htmlFor="toggleSwitch" className="switch"></label>
    </div>
  );
};

export default ThemeToggle;
