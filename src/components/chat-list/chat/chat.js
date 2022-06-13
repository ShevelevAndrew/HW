import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import styled from "@emotion/styled";
import styles from "./chat.module.css";
import { useSelector } from "react-redux";

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

export function Chat({ chatid, title, selected, deleteConversationByName }) {
  const message = useSelector((state) => {
    const messages = state.messages.messages[chatid] ?? [];
    return messages[messages.length - 1];
  });

  return (
    <ListItemStyles className={styles.item} button={true} selected={selected}>
      <ListItemIcon>
        <button onClick={(e) => deleteConversationByName(chatid, e)}>X</button>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={title} />
        {message && (
          <ListItemText
            className={styles.text}
            primary={`${message.autor}:${message.mess}`}
          />
        )}
      </div>
    </ListItemStyles>
  );
}
