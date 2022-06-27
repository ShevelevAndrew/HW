import { child, ref, get, set, remove } from "firebase/database";
import { database } from "./firebase";

export const createConversationApi = (id, conversation) => {
  return set(child(ref(database), `conversations/ch_id${id}`), {
    id: `ch_id${id}`,
    chatname: conversation,
  });
};

export const getConversationsApi = async () => {
  return get(child(ref(database), "conversations"));
};

export const removeConversationsApi = async (id) => {
  return remove(child(ref(database), `conversations/${id}`));
};
