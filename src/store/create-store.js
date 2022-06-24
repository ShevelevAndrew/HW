import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { getPublicGistsApi, getGistsByNameApi } from "../api/gists";
import {
  getConversationsApi,
  createConversationApi,
  removeConversationsApi,
} from "../api/conversations";
import { createMessageApi, getMessagesApi } from "../api/messages";
import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messageReducer } from "./messages";
import { gistsReducer } from "./gists";
import {
  logger,
  timeScheduler,
  botMessage,
  crashReporter,
} from "./middlewares";
// import { format } from "date-fns";

// setTimeout(() => {
//   console.log("send 1");
//   createMessageApi(
//     {
//       date: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
//       message: " test mess 1",
//       autor: "bot",
//     },
//     "ch_id1"
//   );
// });

const api = {
  getPublicGistsApi,
  getGistsByNameApi,
  getConversationsApi,
  createConversationApi,
  removeConversationsApi,
  createMessageApi,
  getMessagesApi,
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["messages"],
  whitelist: ["profile"],
};

const rootReducer = combineReducers({
  profile: profileReducer,
  conversation: conversationReducer,
  messages: messageReducer,
  gists: gistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument(api),
      logger,
      timeScheduler,
      botMessage,
      crashReporter
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
