import {
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
  GET_GISTS_ERROR,
  GET_GISTSBYNAME_START,
  GET_GISTSBYNAME_SUCCESS,
  GET_GISTSBYNAME_ERROR,
} from "./types";

export const getGistsStart = () => ({
  type: GET_GISTS_START,
});

export const getGistsSuccess = (gists) => ({
  type: GET_GISTS_SUCCESS,
  payload: gists,
});

export const getGistsError = (error) => ({
  type: GET_GISTS_ERROR,
  payload: error,
});

export const getGistsByNameStart = () => ({
  type: GET_GISTSBYNAME_START,
});

export const getGistsByNameSuccess = (gists) => ({
  type: GET_GISTSBYNAME_SUCCESS,
  payload: gists,
});

export const getGistsByNameError = (error) => ({
  type: GET_GISTSBYNAME_ERROR,
  payload: error,
});
