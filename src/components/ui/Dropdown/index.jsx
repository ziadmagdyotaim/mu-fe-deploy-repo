import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//TODO Make it support multiple selection
export default function Dropdown({
  items,
  preSelectedItem,
  placeholder = "Select an option",
  onSelect,
  closeAfterSelect = true,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selectedItem, setSelectedItem] = React.useState(preSelectedItem);

  React.useEffect(() => {
    if (preSelectedItem?.id) setSelectedItem(preSelectedItem);
  }, [preSelectedItem]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onItemClick = (item) => {
    setSelectedItem(item);
    onSelect(item);

    if (closeAfterSelect) {
      handleClose();
    }
  };

  if (!items) {
    return null;
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="white"
      >
        <ExpandMoreIcon />

        <div
          className={selectedItem?.image_url ? "flex gap-2 items-center" : ""}
        >
          {selectedItem ? selectedItem.title : placeholder}
          {selectedItem?.image_url && (
            <div className="w-4">
              <img src={selectedItem.image_url} />
            </div>
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
        {items.map((item) => (
          <MenuItem onClick={() => onItemClick(item)} key={item.id}>
            <div className="flex gap-2 items-center">
              <span>{item.title}</span>
              {item?.image_url && (
                <div className="w-4">
                  <img src={item.image_url} className="object-cover" />
                </div>
              )}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
