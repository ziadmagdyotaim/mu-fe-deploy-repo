import api from "@/server/api";
import { useEffect, useState } from "react";
import L2HeaderLink from "./L2HeaderLink";
import CircularProgress from "@mui/material/CircularProgress";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GlobalSearch from "./GlobalSearch";

const L2HeaderLinks = () => {
  const [links, setLinks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  useEffect(() => {
    const getLinks = async () => {
      try {
        const res = await api.get("/header_links");

        setLinks(res.data.filter((link) => link.ui_position == "bottom"));
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    getLinks();
  }, []);

  return loading ? (
    <div className="flex justify-center items-center w-full">
      <CircularProgress size={24} />
    </div>
  ) : (
    links && (
      <>
        <div className="hidden md:block">
          <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2">
            {links.map((link, index) => (
              <L2HeaderLink link={link} key={link.id + index} />
            ))}
          </div>
        </div>
        <div className="block md:hidden">
          <>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <div className="flex justify-start p-4">
                <button type="button" onClick={toggleDrawer(false)}>
                  <CloseIcon fontSize="small" />
                </button>
              </div>
              <div className="min-w-[300px] p-4 pt-0 grid gap-4">
                {links.map((link, index) => (
                  <L2HeaderLink link={link} key={link.id + index} />
                ))}

                <GlobalSearch />
              </div>
            </Drawer>
          </>
        </div>
      </>
    )
  );
};

export default L2HeaderLinks;
