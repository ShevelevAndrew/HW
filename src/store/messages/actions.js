import {
  ADD_MESSAGE,
  GET_MESSAGE_START,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_ERROR,
  CREATE_MESSAGE_START,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_ERROR,
} from "./types";

export const addMessageStore = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const getMessagesStart = () => ({
  type: GET_MESSAGE_START,
});

export const getMessagesSuccess = (message) => ({
  type: GET_MESSAGE_SUCCESS,
  payload: message,
});

export const getMessagesError = (error) => ({
  type: GET_MESSAGE_ERROR,
  payload: error,
});

export const createMessagesStart = () => ({
  type: CREATE_MESSAGE_START,
});

export const createMessagesSuccess = (message) => ({
  type: CREATE_MESSAGE_SUCCESS,
  payload: message,
});

export const createMessagesError = (error) => ({
  type: CREATE_MESSAGE_ERROR,
  payload: error,
});
