import { AUTHORS } from "../../components/utils/constants";
import {
  // addMessageStore,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
  createMessagesStart,
  createMessagesSuccess,
  createMessagesError,
} from "./actions";
import { format } from "date-fns";

const answer = [{ autor: AUTHORS.BOT, mess: "hello from bot thunk" }];
const randomMess = () => {
  return answer[Math.floor(Math.random() * 1)].mess;
};
const str = {
  autor: AUTHORS.BOT,
  mess: randomMess(),
};
// export const sendMessageWithBot =
//   (message, messages) => (dispatch, getState) => {
//     dispatch(addMessageStore(message, messages));

//     const keys = Object.keys(message);
//     if (message[keys][0]?.autor === AUTHORS.USER) {
//       setTimeout(() => {
//         dispatch(addMessageStore({ [keys]: [str] }));
//       }, 500);
//     }
//   };

export const getMessages = () => async (dispatch, _, api) => {
  const messages = {};
  try {
    dispatch(getMessagesStart());

    const snapshot = await api.getMessagesApi();

    snapshot.forEach((snap) => {
      messages[snap.key] = Object.values(snap.val());
    });

    dispatch(getMessagesSuccess(messages));
  } catch (error) {
    dispatch(getMessagesError(error));
  }
};

export const sendMessageWithBot = (message) => async (dispatch, _, api) => {
  // const key = Object.keys(message);
  // console.log("key", key);
  // console.log("message", message, id);
  try {
    dispatch(createMessagesStart());
    const key = Object.keys(message);
    await api.createMessageApi(
      {
        ...message[key][0],
        date: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        id: format(new Date(), "yyyyMMddHHmmss"),
      },
      key
    );

    dispatch(createMessagesSuccess(message));

    // const key = Object.keys(message);
    // console.log("3", message);
    if (message[key][0]?.autor === AUTHORS.USER) {
      setTimeout(() => {
        dispatch(createMessagesSuccess({ [key]: [str] }));
      }, 1000);
      await api.createMessageApi(
        {
          ...str,
          date: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
          id: format(new Date(), "yyyyMMddHHss"),
        },
        key
      );
    }
  } catch (error) {
    dispatch(createMessagesError(error));
  }
};
