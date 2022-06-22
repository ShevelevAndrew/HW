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

const initialState = {
  conversation: [],
  pending: false,
  error: null,
  pendingCreate: false,
  errorCreate: null,
};
// const initialState = {
//   conversation: [
//     { id: "ch_id1", chatname: "Сhat 1" },
//     { id: "ch_id2", chatname: "Сhat 2" },
//     { id: "ch_id3", chatname: "Сhat 3" },
//   ],
//   pending: false,
//   error: null,
// };

export const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    // case CREATE_CONVERSATION:
    //   return {
    //     ...state,
    //     conversation: [
    //       ...state.conversation,
    //       {
    //         id: "ch_id" + (state.conversation.length + 1),
    //         chatname: action.payload,
    //       },
    //     ],
    //   };
    // case DELETE_CONVERSATION:
    //   return {
    //     ...state,
    //     conversation: state.conversation.filter((el) => {
    //       return el.id !== action.payload;
    //     }),
    //   };
    case GET_CONVERSATIONS_START:
      return { ...state, pending: true, error: null };

    case GET_CONVERSATIONS_SUCCESS:
      return { ...state, pending: false, conversation: action.payload };

    case GET_CONVERSATIONS_ERROR:
      return { ...state, pending: false, error: action.payload };

    case CREATE_CONVERSATION_START:
      return { ...state, pendingCreate: true, errorCreate: null };

    case CREATE_CONVERSATION_SUCCESS:
      return {
        ...state,
        pendingCreate: false,
        conversation: [
          ...state.conversation,
          {
            id: "ch_id" + (state.conversation.length + 1),
            chatname: action.payload,
          },
        ],
      };

    case CREATE_CONVERSATION_ERROR:
      return { ...state, pendingCreate: false, errorCreate: action.payload };

    case REMOVE_CONVERSATION_START:
      return { ...state };

    case REMOVE_CONVERSATION_SUCCESS:
      return {
        ...state,
        conversation: state.conversation.filter((el) => {
          return el.id !== action.payload;
        }),
      };

    case REMOVE_CONVERSATION_ERROR:
      return { ...state };

    default:
      return state;
  }
};
