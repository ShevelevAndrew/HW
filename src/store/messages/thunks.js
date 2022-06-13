import { AUTHORS } from "../../components/utils/constants";
import { addMessageStore } from "./actions";
const answer = [{ autor: AUTHORS.BOT, mess: "hello from bot thunk" }];
const randomMess = () => {
  return answer[Math.floor(Math.random() * 1)].mess;
};
const str = {
  autor: AUTHORS.BOT,
  mess: randomMess(),
};
export const sendMessageWithBot =
  (message, messages) => (dispatch, getState) => {
    dispatch(addMessageStore(message, messages));

    const keys = Object.keys(message);
    if (message[keys][0]?.autor === AUTHORS.USER) {
      setTimeout(() => {
        dispatch(addMessageStore({ [keys]: [str] }));
      }, 500);
    }
  };
