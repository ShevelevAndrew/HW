import { child, ref, get, push } from "firebase/database";
import { database } from "./firebase";

export const createMessageApi = (message, chatId) => {
  return push(child(ref(database), `messages/${chatId}`), message);
};

export const getMessagesApi = async () => {
  return get(child(ref(database), "messages"));
};
