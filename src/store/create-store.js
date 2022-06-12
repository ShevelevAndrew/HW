import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messageReducer } from "./messages";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    conversation: conversationReducer,
    messages: messageReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (args) => args
);
