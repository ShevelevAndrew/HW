// import { getPublicGistsApi } from "../../api/gists";
import {
  getGistsStart,
  getGistsSuccess,
  getGistsError,
  getGistsByNameStart,
  getGistsByNameSuccess,
  getGistsByNameError,
} from "./actions";

// const URL = (page) => `https://api.github.com/gists/public?page=${page}`;

export const getGists =
  (page = 1) =>
  async (dispatch, getState, api) => {
    try {
      dispatch(getGistsStart());

      // const result = await fetch(URL(page));
      // const data = await result.json();
      const { data } = await api.getPublicGistsApi(page);

      // if (result.status === 200) {
      dispatch(getGistsSuccess(data));
      // } else {
      //   dispatch(getGistsError("error"));
      // }
    } catch (error) {
      dispatch(getGistsError(error));
    }
  };
export const getGistsByName =
  (name = "bogdanq") =>
  async (dispatch, getState, api) => {
    try {
      dispatch(getGistsByNameStart());

      const { data } = await api.getGistsByNameApi(name);
      dispatch(getGistsByNameSuccess(data));
    } catch (error) {
      dispatch(getGistsByNameError(error));
    }
  };
