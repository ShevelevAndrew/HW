import { TOGGLE_VISIBLE_PROFILE, UPDATE_PROFILE } from "./types";

const initialState = {
  firstName: "firstName",
  lastName: "LastName",
  isVisibleProfile: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBLE_PROFILE:
      return {
        ...state,
        isVisibleProfile: !state.isVisibleProfile,
      };
    case UPDATE_PROFILE:
      const { firstName, lastName, visible } = action.payload;
      return {
        ...state,
        firstName: firstName,
        lastName: lastName,
        isVisibleProfile: visible,
      };
    default:
      return state;
  }
};
