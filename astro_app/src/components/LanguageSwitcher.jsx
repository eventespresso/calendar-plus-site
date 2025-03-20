import React, { useEffect, useState } from "react";
import i18next from "i18next";
// import { useLocation } from "react-router-dom"; // We'll use react-router to manipulate the URL

const LanguageSwitcher = () => {
  // const location = useLocation();
  // const history = useHistory();
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  useEffect(() => {
    // Extract the lang query parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang") || "en"; // Default to 'en' if not set
    setCurrentLanguage(lang);
    console.log("lll", lang);
    i18next.changeLanguage(lang); // Change language in i18next
  }, []);

  const handleLanguageChange = (lang) => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("lang", lang);

    // Update the URL with the new language query param
    // history.push({
    //   pathname: location.pathname,
    //   search: newSearchParams.toString(),
    // });

    setCurrentLanguage(lang);
    console.log("lang", lang);
    i18next.changeLanguage(lang); // Change language in i18next
  };

  return (
    <div>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`mr-4 ${currentLanguage === "en" ? "font-bold" : ""}`}
      >
        English
      </button>
      <button
        onClick={() => handleLanguageChange("fr")}
        className={`mr-4 ${currentLanguage === "fr" ? "font-bold" : ""}`}
      >
        Français
      </button>
    </div>
  );
};

export default LanguageSwitcher;
