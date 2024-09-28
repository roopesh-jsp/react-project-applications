import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});
export default function Themecontext({ children }) {
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  }
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const ctxVal = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={ctxVal}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const data = useContext(ThemeContext);
  return data;
};
