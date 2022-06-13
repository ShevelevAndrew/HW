import { ADD_MESSAGE } from "./types";
import { format } from "date-fns";

const initialState = {
  messages: {
    ch_id1: [],
  },
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const keys = Object.keys(action.payload);

      const currentMessage = !state.messages[keys]
        ? [
            {
              ...action.payload[keys][0],
              id: 1,
              date: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
            },
          ]
        : [
            ...state.messages[keys],
            {
              ...action.payload[keys][0],
              id: state.messages[keys].length + 1,
              date: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
            },
          ];

      const newMess = {
        ...state.messages,
        [keys]: currentMessage,
      };

      return {
        ...state,
        messages: newMess,
      };

    default:
      return state;
  }
};
