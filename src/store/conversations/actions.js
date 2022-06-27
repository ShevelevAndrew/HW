import {
  // CREATE_CONVERSATION,
  // DELETE_CONVERSATION,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR,
  CREATE_CONVERSATION_START,
  CREATE_CONVERSATION_SUCCESS,
  CREATE_CONVERSATION_ERROR,
  REMOVE_CONVERSATION_START,
  REMOVE_CONVERSATION_SUCCESS,
  REMOVE_CONVERSATION_ERROR,
} from "./types";

// export const createConversation = (conversation) => ({
//   type: CREATE_CONVERSATION,
//   payload: conversation,
// });

// export const deleteConversation = (id) => ({
//   type: DELETE_CONVERSATION,
//   payload: id,
//   meta: {
//     delay: 5000,
//   },
// });

export const getConversationsStart = () => ({
  type: GET_CONVERSATIONS_START,
});

export const getConversationsSuccess = (conversation) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  payload: conversation,
});

export const getConversationsError = (error) => ({
  type: GET_CONVERSATIONS_ERROR,
  payload: error,
});

export const createConversationStart = () => ({
  type: CREATE_CONVERSATION_START,
});

export const createConversationSuccess = (conversation) => ({
  type: CREATE_CONVERSATION_SUCCESS,
  payload: conversation,
});

export const createConversationError = (error) => ({
  type: CREATE_CONVERSATION_ERROR,
  payload: error,
});

export const removeConversationStart = () => ({
  type: REMOVE_CONVERSATION_START,
});

export const removeConversationSuccess = (conversation) => ({
  type: REMOVE_CONVERSATION_SUCCESS,
  payload: conversation,
});

export const removeConversationError = (error) => ({
  type: REMOVE_CONVERSATION_ERROR,
  payload: error,
});
