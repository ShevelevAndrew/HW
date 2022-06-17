// import { getPublicGistsApi } from "../../api/gists";
import { getGistsStart, getGistsSuccess, getGistsError } from "./actions";

// const URL = (page) => `https://api.github.com/gists/public?page=${page}`;

export const getGists =
  (page = 1) =>
  async (dispatch, getState, api) => {
    try {
      dispatch(getGistsStart());

      // const result = await fetch(URL(page));
      // const data = await result.json();
      // const { data } = await api.getPublicGistsApi(page);
      const { data } = await api.getGistsByNameApi();

      // if (result.status === 200) {
      dispatch(getGistsSuccess(data));
      // } else {
      //   dispatch(getGistsError("error"));
      // }
    } catch (error) {
      dispatch(getGistsError(error));
    }
  };
