import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useAppStore from "@/store/useAppStore";
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

const Submenu = ({ link, isMuted = true }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { language } = useAppStore();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onItemClick = (link) => {
    console.log(link);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="white"
        className="w-full"
      >
        <div className="w-full flex items-center justify-between text-base capitalize">
          <span className={isMuted ? "text-black opacity-70" : ""}>
            {link?.name[language]}
          </span>
          {open ? (
            <ExpandLessIcon
              className={isMuted ? "text-black opacity-70" : ""}
              fontSize="small"
            />
          ) : (
            <ExpandMoreIcon
              className={isMuted ? "text-black opacity-70" : ""}
              fontSize="small"
            />
          )}
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {link.children.map((item) =>
          item.has_submenu ? (
            <Submenu link={item} isMuted={false} key={item.id} />
          ) : (
            <MenuItem onClick={() => onItemClick(item)} key={item.id}>
              <div className="flex gap-2 items-center">
                <span>{item?.name[language]}</span>
              </div>
            </MenuItem>
          )
        )}
      </Menu>
    </div>
  );
};

const L2HeaderLink = ({ link }) => {
  if (link.has_submenu) {
    return (
      <div>
        <Submenu link={link} />
      </div>
    );
  }

  return <div></div>;
};

export default L2HeaderLink;
