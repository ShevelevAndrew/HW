import { messageReducer, addMessageStore } from "../../messages";

describe("messages reducer", () => {
  describe("other type", () => {
    it("send message", () => {
      const MESSAGE = { ch_id1: [{ autor: "user", mess: "test message" }] };

      const state = messageReducer({ messages: {} }, addMessageStore(MESSAGE));
      const key = Object.keys(state.messages);

      expect(state.messages[key]).toBeDefined();
      expect(state.messages[key].length).toBe(1);
      expect(state.messages[key][0].autor).toBe(MESSAGE[key][0].autor);
      expect(state.messages[key][0].mess).toBe(MESSAGE[key][0].mess);
    });
  });
  describe("get messages type", () => {});
});
