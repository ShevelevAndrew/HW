import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import styled from "@emotion/styled";
import styles from "./chat.module.css";

const ListItemStyles = styled(ListItem)`
  background: #182e44;
  padding-top: 0px;
  &.Mui-selected {
    background-color: #275179;
  }
  &.Mui &.Mui-selected:hover {
    background: #275179;
  }
`;

export function Chat({ title, selected }) {
  return (
    <ListItemStyles className={styles.item} button={true} selected={selected}>
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={title} />
        <ListItemText className={styles.text} primary="author: last message" />
      </div>
    </ListItemStyles>
  );
}
