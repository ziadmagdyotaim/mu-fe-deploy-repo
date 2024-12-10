import LanguageSwitcher from "../../../LanguageSwitcher";
import SocialLinks from "../../../SocialLinks";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import L1HeaderLinks from "./L1HeaderLinks";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const HeaderNavLevel1 = () => {
  const { t } = useTranslation();
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

  return (
    <div className="p-4 bg-primary">
      <div className="container flex justify-between lg:items-center gap-4">
        <div className="hidden md:flex justify-between lg:items-center gap-4">
          <L1HeaderLinks />

          <LanguageSwitcher />

          <SocialLinks />
        </div>

        <div className="block md:hidden">
          <>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon htmlColor="#fff" />
            </IconButton>
            <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
              <div className="flex justify-start p-4">
                <button type="button" onClick={toggleDrawer(false)}>
                  <CloseIcon fontSize="small" />
                </button>
              </div>
              <div className="min-w-[300px] p-4 pt-0 grid gap-4">
                <L1HeaderLinks />

                <LanguageSwitcher />

                <SocialLinks />
              </div>
            </Drawer>
          </>
        </div>

        <Link to="/login" className="justify-self-start">
          <Button variant="contained" color="warning" className="w-[120px]">
            {t("Login")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderNavLevel1;
