import { ADD_MESSAGE } from "./types";

export const addMessageStore = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});
