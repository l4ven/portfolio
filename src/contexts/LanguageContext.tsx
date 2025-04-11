import { createContext, useContext, useState } from "react";

type LanguageType = 0 | 1; // 0 = 한국어, 1 = English

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState<LanguageType>(() => {
    return (Number(localStorage.getItem("language")) as LanguageType) || 0;
  });

  const setLanguage = (lang: LanguageType) => {
    localStorage.setItem("language", String(lang));
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
