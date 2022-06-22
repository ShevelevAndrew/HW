import { child, ref, get, set, remove } from "firebase/database";
import { database } from "./firebase";
// const initialState = {
//   conversation: [
//     { id: "ch_id1", chatname: "Сhat 1" },
//     { id: "ch_id2", chatname: "Сhat 2" },
//     { id: "ch_id3", chatname: "Сhat 3" },
//   ],
// };
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
