import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/useAppStore";
import Dropdown from "../ui/Dropdown";
import { useMemo } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { language, setLanguage } = useAppStore();
  const { languages } = useAppStore();

  const selectedLanguage = useMemo(() => {
    return languages ? languages.find((lang) => lang.key === language) : null;
  }, [language, languages]);


  const onLanguageSelect = (lang) => {
    setLanguage(lang.key, navigate, i18n);
  };

  return (
    <div className="md:text-white">
      {languages && (
        <Dropdown
          items={languages}
          preSelectedItem={selectedLanguage}
          placeholder=""
          onSelect={onLanguageSelect}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;
