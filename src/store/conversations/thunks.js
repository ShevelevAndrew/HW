import {
  getConversationsStart,
  getConversationsSuccess,
  getConversationsError,
  createConversationStart,
  createConversationSuccess,
  createConversationError,
  removeConversationStart,
  removeConversationSuccess,
  removeConversationError,
} from "./actions";

export const getConversations = () => async (dispatch, _, api) => {
  const conversation = [];

  try {
    dispatch(getConversationsStart());

    const snapshot = await api.getConversationsApi();

    snapshot.forEach((snap) => {
      conversation.push(snap.val());
    });

    dispatch(getConversationsSuccess(conversation));
  } catch (e) {
    dispatch(getConversationsError(e));
  }
};

export const createConversation =
  (id, conversation) => async (dispatch, _, api) => {
    try {
      dispatch(createConversationStart());

      await api.createConversationApi(id, conversation);

      dispatch(createConversationSuccess(conversation));
    } catch (e) {
      dispatch(createConversationError(e));
    }
  };

export const deleteConversation = (id) => async (dispatch, _, api) => {
  try {
    dispatch(removeConversationStart());

    await api.removeConversationsApi(id);

    dispatch(removeConversationSuccess(id));
  } catch (e) {
    dispatch(removeConversationError(e));
  }
};
