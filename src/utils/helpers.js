import debounce from "lodash/debounce";

// Langauge Handling
export const getCurrentLanguage = () => {
  return localStorage.getItem("language") || "ar";
};

const debouncedNavigate = debounce((lang, navigate) => {
  navigate(`?lang=${lang}`);
}, 100);

export const setCurrentLanguage = (lang, navigate, i18n) => {
  i18n.changeLanguage(lang);
  document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  localStorage.setItem("language", lang);
  debouncedNavigate(lang, navigate);
};
