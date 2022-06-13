import { AUTHORS } from "../../components/utils/constants";
import { ADD_MESSAGE, addMessageStore } from "../messages";
const answer = [{ autor: AUTHORS.BOT, mess: "hello from bot middleware" }];
const randomMess = () => {
  return answer[Math.floor(Math.random() * 1)].mess;
};
const str = {
  autor: AUTHORS.BOT,
  mess: randomMess(),
};
export const botMessage = (store) => (next) => (action) => {
  if (
    action.type === ADD_MESSAGE &&
    action.payload[Object.keys(action.payload)][0]?.autor === "user"
  ) {
    setTimeout(() => {
      store.dispatch(addMessageStore({ [Object.keys(action.payload)]: [str] }));
    }, 500);
  }

  return next(action);
};
