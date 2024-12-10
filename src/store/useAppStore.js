import { create } from "zustand";
import { getCurrentLanguage, setCurrentLanguage } from "@/utils/helpers";

const useAppStore = create((set) => ({
  // Language Handling
  languages: [],
  setLanguages: (newLanguages) => {
    set({ languages: newLanguages });
  },
  language: getCurrentLanguage(),
  setLanguage: (newLanguage, navigate, i18n) => {
    setCurrentLanguage(newLanguage, navigate, i18n);
    set({ language: newLanguage });
  },
}));

export default useAppStore;
