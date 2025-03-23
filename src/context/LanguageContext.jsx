import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext("en");

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLan = localStorage.getItem("language");

    setLanguage(storedLan || "en");
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
