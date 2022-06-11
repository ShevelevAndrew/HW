import { CREATE_CONVERSATION, DELETE_CONVERSATION } from "./types";

const initialState = {
  conversation: [
    { id: "ch_id1", chatname: "Сhat 1" },
    { id: "ch_id2", chatname: "Сhat 2" },
    { id: "ch_id3", chatname: "Сhat 3" },
  ],
};

export const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversation: [
          ...state.conversation,
          {
            id: "ch_id" + (state.conversation.length + 1),
            chatname: action.payload,
          },
        ],
      };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversation: state.conversation.filter((el) => {
          return el.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};
