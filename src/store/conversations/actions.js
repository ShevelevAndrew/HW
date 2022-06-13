import { CREATE_CONVERSATION, DELETE_CONVERSATION } from "./types";

export const createConversation = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});

export const deleteConversation = (id) => ({
  type: DELETE_CONVERSATION,
  payload: id,
  meta: {
    delay: 5000,
  },
});
