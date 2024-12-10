import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <section className="container p-4">
      <h1>{t("Welcome to the Home Page")}</h1>
    </section>
  );
};

export default Home;
