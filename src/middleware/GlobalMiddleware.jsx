import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useAppStore from "../store/useAppStore";
import api from "../server/api";
import { getCurrentLanguage } from "../utils/helpers";
import { CircularProgress } from "@mui/material";

const GlobalMiddleware = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { setLanguages, setLanguage } = useAppStore();
  const [loading, setLoading] = useState(false);

  const changeLanguage = (languages) => {
    const queryParams = new URLSearchParams(location.search);
    const urlLang = queryParams.get("lang");

    if (!urlLang) {
      setLanguage(getCurrentLanguage(), navigate, i18n);
    } else {
      const isValidLang =
        languages?.findIndex((lang) => lang.key === urlLang) !== -1;

      if (isValidLang) setLanguage(urlLang, navigate, i18n);
      else setLanguage(getCurrentLanguage(), navigate, i18n);
    }
  };

  // Init Language configurations
  useEffect(() => {
    const getLanguages = async () => {
      setLoading(true);
      try {
        const res = await api.get("/languages");

        setLanguages(res.data);

        changeLanguage(res.data);
      } catch (error) {
        console.log(error);
        setLanguage("ar", navigate, i18n);
      }
      setLoading(false);
    };

    getLanguages();
  }, []);

  // Middleware logic here
  useEffect(() => {
    // Example middleware tasks:
    // - Check user authentication
    // - Log analytics
    // - Redirect under certain conditions
    // - Show a loading spinner if needed
  }, [location]);

  return loading ? (
    <div className="fixed w-full h-screen flex justify-center items-center">
      <CircularProgress size="32px" />
    </div>
  ) : (
    <>{children}</>
  );
};

export default GlobalMiddleware;
