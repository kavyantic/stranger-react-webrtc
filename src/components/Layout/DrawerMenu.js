import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { uiActions } from "../../store/uiSlice";

export default function TemporaryDrawer() {
  const dispatch = useDispatch()
  const isMobile = useMediaQuery("(min-width:800px)");
  const drawerVis = useSelector((s) => s.ui.drawerVis);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={()=>{dispatch(uiActions.toggleDrawerVis(false))}}
      onKeyDown={()=>{dispatch(uiActions.toggleDrawerVis(false))}}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
     
        <React.Fragment>
          <Drawer
            anchor={!isMobile?'bottom':'left'}
            open={drawerVis}
            onClose={()=>{dispatch(uiActions.toggleDrawerVis(false))}}
            
          >
            {list(!isMobile?'bottom':'left')}
          </Drawer>
        </React.Fragment>
  );
}
