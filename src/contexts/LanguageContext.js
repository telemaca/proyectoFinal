import React, { useState, useContext, createContext } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("eng");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguageContext = () => useContext(LanguageContext);

export { LanguageProvider };
export default useLanguageContext;
