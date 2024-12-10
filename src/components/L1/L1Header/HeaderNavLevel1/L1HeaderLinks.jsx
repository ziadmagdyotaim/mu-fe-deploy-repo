import api from "@/server/api";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import useAppStore from "../../../../store/useAppStore";

const L1HeaderLinks = () => {
  const [links, setLinks] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language } = useAppStore();

  useEffect(() => {
    const getLinks = async () => {
      try {
        const res = await api.get("/header_links");

        setLinks(res.data.filter((link) => link.ui_position == "top"));
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    getLinks();
  }, []);

  return loading ? (
    <div className="flex justify-center items-center w-full text-white">
      <CircularProgress size={24} color="inherit" />
    </div>
  ) : (
    links && (
      <div>
        <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6">
          {links.map((link) => (
            <li
              key={link.id}
              className="md:text-white animate-underline after:!bg-black md:after:!bg-white w-fit relative list-element-bullet before:!bg-black md:before:!bg-white pr-2"
            >
              <a href={link.url}>{link.name[language]}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default L1HeaderLinks;
