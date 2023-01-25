import { createContext, PropsWithChildren, useState } from "react";

export const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: function () {},
});

export const DarkModeProvider = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
