import {
  // ADD_MESSAGE,
  GET_MESSAGE_START,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_ERROR,
  CREATE_MESSAGE_START,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_ERROR,
} from "./types";
import { format } from "date-fns";

const initialState = {
  messages: {},
  pending: false,
  error: null,
  pendingAdd: false,
  errorAdd: null,
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_MESSAGE:
    // const keys = Object.keys(action.payload);

    // const currentMessage = !state.messages[keys]
    //   ? [
    //       {
    //         ...action.payload[keys][0],
    //         id: 1,
    //         date: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
    //       },
    //     ]
    //   : [
    //       ...state.messages[keys],
    //       {
    //         ...action.payload[keys][0],
    //         id: state.messages[keys].length + 1,
    //         date: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
    //       },
    //     ];

    // const newMess = {
    //   ...state.messages,
    //   [keys]: currentMessage,
    // };
    // return {
    //   ...state,
    //   // messages: newMess,
    // };

    case GET_MESSAGE_START:
      return { ...state, pending: true, error: null };

    case GET_MESSAGE_SUCCESS:
      return { ...state, pending: false, messages: action.payload };

    case GET_MESSAGE_ERROR:
      return { ...state, pending: false, error: action.payload };

    case CREATE_MESSAGE_START:
      return { ...state, pendingAdd: true, errorAdd: null };

    case CREATE_MESSAGE_SUCCESS:
      const key = Object.keys(action.payload);
      const currentMessage = !state.messages[key]
        ? [
            {
              ...action.payload[key][0],
              id: 1,
              date: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
            },
          ]
        : [
            ...state.messages[key],
            {
              ...action.payload[key][0],
              id: format(new Date(), "yyyy-MM-dd HH:mm:ss"), //state.messages[key].length + 1,
              date: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
            },
          ];
      const newMess = {
        ...state.messages,
        [key]: currentMessage,
      };
      return { ...state, pendingAdd: false, messages: newMess };

    case CREATE_MESSAGE_ERROR:
      return { ...state, pendingAdd: false, errorAdd: action.payload };

    default:
      return state;
  }
};
