import axios from "axios";
import { logger } from "./logger";

class Request {
  constructor(token = "") {
    this.request = logger(
      axios.create({
        baseURL: "https://api.github.com",
      })
    );
    this.token = token;
  }
  get = (url) => {
    return this.request.get(url);
  };

  post = (url, params) => {
    return this.request.get(url, params);
  };
}

export const request = new Request();
